"use client";

import { useState } from "react";
import { useAuthStore } from "@/src/stores/auth.store";
import { useRouter } from "next/navigation";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { PanelMenu } from "primereact/panelmenu";
import { Avatar } from "primereact/avatar";
import { Skeleton } from "primereact/skeleton";
import { MenuItem } from "primereact/menuitem";
import { Menu } from "primereact/menu";
import { AlignJustify, X } from "lucide-react";
import React from "react";

/**
 * Основной клиентский Layout для всего дашборда.
 * Включает Sidebar, Header и область для контента.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const userMenuRef = React.useRef<Menu>(null);

  // 1. Получаем состояние пользователя из Zustand
  const { user, status, clearUser } = useAuthStore();

  // 2. Определяем навигационные ссылки
  // (Они будут зависеть от роли пользователя)
  const navLinks: MenuItem[] = [
    {
      label: "Главная",
      icon: "pi pi-home",
      command: () => router.push("/dashboard"),
    },
    {
      label: "Мои Сделки",
      icon: "pi pi-briefcase",
      items: [
        {
          label: "Активные",
          icon: "pi pi-check-circle",
          command: () => router.push("/dashboard/deals/active"),
        },
        {
          label: "Завершенные",
          icon: "pi pi-history",
          command: () => router.push("/dashboard/deals/completed"),
        },
      ],
    },
    // Динамическое меню в зависимости от роли
    ...(user?.role === "DEVELOPER"
      ? [
          {
            label: "Мои Продукты",
            icon: "pi pi-database",
            command: () => router.push("/dashboard/products"),
          },
        ]
      : []),
    {
      label: "Настройки",
      icon: "pi pi-cog",
      command: () => router.push("/dashboard/settings"),
    },
  ];

  // 3. Меню для аватара пользователя
  const userMenuItems: MenuItem[] = [
    {
      label: "Профиль",
      icon: "pi pi-user",
      command: () => router.push("/dashboard/settings/profile"),
    },
    {
      label: "Выйти",
      icon: "pi pi-sign-out",
      command: () => {
        // TODO: Сделать API-запрос на /api/auth/logout (для очистки cookie)
        clearUser();
        router.push("/sign-in");
      },
    },
  ];

  // 4. Пока AuthInitializer грузит данные, показываем Skeleton
  if (status === "loading") {
    return (
      <div className="flex">
        <Skeleton shape="rectangle" width="250px" height="100vh" />
        <div className="flex-1 p-4">
          <Skeleton width="100%" height="50px" className="mb-4" />
          <Skeleton width="100%" height="calc(100vh - 100px)" />
        </div>
      </div>
    );
  }

  // 5. Если middleware по какой-то причине дал сбой,
  // а Zustand говорит, что мы не вошли - редирект
  if (status === "unauthenticated") {
    router.replace("/sign-in");
    return null;
  }

  // 6. Основная разметка
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* --- SIDEBAR (PrimeReact) --- */}
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        className="w-full md:w-[250px]"
        header={
          <span className="font-bold text-xl text-primary-600">StartappЁж</span>
        }
      >
        <PanelMenu model={navLinks} className="w-full" />
      </Sidebar>

      {/* --- ОСНОВНОЙ КОНТЕНТ --- */}
      <div className="flex-1 flex flex-col">
        {/* --- HEADER --- */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md z-10">
          {/* Гамбургер-меню (показывается на мобильных) */}
          <Button
            icon={<AlignJustify size={20} />}
            rounded
            text
            onClick={() => setSidebarVisible(true)}
          />

          {/* Меню пользователя */}
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700 hidden sm:block">
              {user?.firstName} {user?.lastName}
            </span>
            <Avatar
              label={user?.firstName?.[0] || "U"}
              size="large"
              shape="circle"
              className="bg-primary-500 text-white cursor-pointer"
              onClick={(e) => userMenuRef.current?.toggle(e)}
            />
            <Menu
              model={userMenuItems}
              popup
              ref={userMenuRef}
              id="user-avatar-menu"
            />
          </div>
        </header>

        {/* --- Область контента страницы --- */}
        <main className="p-4 md:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}
