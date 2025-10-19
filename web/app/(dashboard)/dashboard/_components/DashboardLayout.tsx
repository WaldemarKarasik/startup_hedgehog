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

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
}

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
      label: "Обзор",
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
      active: currentPath.startsWith("/dashboard/analytics"),
    },
    {
      label: "Настройки",
      icon: <Settings size={20} />,
      href: "/dashboard/settings",
      active: currentPath.startsWith("/dashboard/settings"),
    },
  ];

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
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            StartappЁж
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setCurrentPath(item.href)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                item.active
                  ? "bg-primary-50 text-primary-700 font-medium shadow-sm"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span
                className={item.active ? "text-primary-600" : "text-gray-400"}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Card */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <Avatar
              label={user?.firstName?.[0] || "U"}
              size="normal"
              shape="circle"
              className="bg-gradient-to-br from-primary-500 to-primary-700 text-white"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              StartappЁж
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setCurrentPath(item.href);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                item.active
                  ? "bg-primary-50 text-primary-700 font-medium shadow-sm"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span
                className={item.active ? "text-primary-600" : "text-gray-400"}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
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
