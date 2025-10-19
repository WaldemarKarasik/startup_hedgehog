"use client";

import { useState } from "react";
import { useAuthStore } from "@/src/stores/auth.store";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Skeleton } from "primereact/skeleton";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import {
  LayoutDashboard,
  Briefcase,
  Package,
  Settings,
  LogOut,
  User,
  Menu as MenuIcon,
  X,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { DesktopSidebar } from "./sidebar/DesktopSidebar";
import { MobileSidebar } from "./sidebar/MobileSidebar";

export type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
  notYetImplemented?: boolean;
};

/**
 * Современный Dashboard Layout с красивым sidebar и header
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/dashboard");
  const userMenuRef = React.useRef<Menu>(null);

  // Получаем пользователя из Zustand
  const { user, status, clearUser } = useAuthStore();

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Навигационные элементы
  const navItems: NavItem[] = [
    {
      label: "Обзoр",
      icon: <LayoutDashboard size={20} />,
      href: "/dashboard",
      active: currentPath === "/dashboard",
    },
    {
      label: "Мои Сделки",
      icon: <Briefcase size={20} />,
      href: "/dashboard/deals",
      active: currentPath.startsWith("/dashboard/deals"),
    },
    {
      label: "Каталог",
      icon: <ShoppingCart size={20} />,
      href: "/dashboard/catalog",
      active: currentPath.startsWith("/dashboard/catalog"),
    },
    ...(user?.role === "DEVELOPER"
      ? [
          {
            label: "Мои Продукты",
            icon: <Package size={20} />,
            href: "/dashboard/products",
            active: currentPath.startsWith("/dashboard/products"),
          },
        ]
      : []),
    {
      label: "Аналитика",
      icon: <TrendingUp size={20} />,
      href: "/dashboard/analytics",
      notYetImplemented: true,
      active: currentPath.startsWith("/dashboard/analytics"),
    },
    {
      label: "Настройки",
      icon: <Settings size={20} />,
      href: "/dashboard/settings",
      active: currentPath.startsWith("/dashboard/settings"),
    },
  ] as const;

  // Меню пользователя
  const userMenuItems: MenuItem[] = [
    {
      label: "Профиль",
      icon: "pi pi-user",
      command: () => router.push("/dashboard/settings/profile"),
    },
    {
      separator: true,
    },
    {
      label: "Выйти",
      icon: "pi pi-sign-out",
      command: () => {
        clearUser();
        router.push("/sign-in");
      },
    },
  ];

  // Loading skeleton
  if (status === "loading") {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <div className="w-64 bg-white border-r border-gray-200">
          <Skeleton width="100%" height="100vh" />
        </div>
        <div className="flex-1">
          <Skeleton width="100%" height="64px" className="mb-4" />
          <div className="p-8">
            <Skeleton width="100%" height="400px" />
          </div>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (status === "unauthenticated") {
    router.replace("/sign-in");
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Desktop */}
      <DesktopSidebar navItems={navItems} setCurrentPath={setCurrentPath} />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <MobileSidebar
        navItems={navItems}
        setCurrentPath={setCurrentPath}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 py-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <MenuIcon size={24} />
            </button>

            {/* Desktop: Empty space */}
            <div className="hidden lg:block" />

            {/* User Menu */}
            <div className="flex items-center gap-4">
              {/* User Info */}
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-500">
                  {user?.role === "DEVELOPER" ? "Разработчик" : "Покупатель"}
                </p>
              </div>

              {/* Avatar with Menu */}
              <div className="relative">
                <Avatar
                  label={user?.firstName?.[0] || "U"}
                  size="large"
                  shape="circle"
                  className="bg-gradient-to-br from-primary-500 to-primary-700 text-white cursor-pointer ring-2 ring-offset-2 ring-primary-200 hover:ring-primary-300 transition-all"
                  onClick={(e) => userMenuRef.current?.toggle(e)}
                />
                <Menu
                  model={userMenuItems}
                  popup
                  ref={userMenuRef}
                  id="user-menu"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
