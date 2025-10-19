import { X } from "lucide-react";
import { NavItem } from "../DashboardLayout";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { NotImplemented } from "./NotImplemented";

export const MobileSidebar = ({
  navItems,
  sidebarOpen,
  setSidebarOpen,
  setCurrentPath,
}: {
  navItems: NavItem[];
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
  setCurrentPath: Dispatch<SetStateAction<string>>;
}) => {
  return (
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
            StartAppЁж
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
        {navItems.map((item) => {
          if (item.notYetImplemented) return <NotImplemented navItem={item} />;
          return (
            <Link
              key={item.href}
              href={item.notYetImplemented ? "" : item.href}
              onClick={() => {
                item.notYetImplemented ? null : setCurrentPath(item.href);
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
              {item.notYetImplemented && (
                <span className="ml-auto text-red-600 text-sm">Скоро</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
