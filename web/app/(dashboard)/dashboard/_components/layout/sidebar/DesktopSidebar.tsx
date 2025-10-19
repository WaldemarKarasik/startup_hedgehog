import Link from "next/link";
import { NavItem } from "../DashboardLayout";
import { Avatar } from "primereact/avatar";
import { useAuthStore } from "@/src/stores/auth.store";
import { Dispatch, SetStateAction } from "react";
import { NotImplemented } from "./NotImplemented";

export const DesktopSidebar = ({
  navItems,
  setCurrentPath,
}: {
  navItems: NavItem[];
  setCurrentPath: Dispatch<SetStateAction<string>>;
}) => {
  const user = useAuthStore((s) => s.user);
  return (
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
        {navItems.map((item) => {
          if (item.notYetImplemented) return <NotImplemented navItem={item} />;
          return (
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
              <span className="text-sm">{item.label} </span>
              {item.notYetImplemented && (
                <span className="ml-auto text-red-600 text-sm">Скоро</span>
              )}
            </Link>
          );
        })}
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
  );
};
