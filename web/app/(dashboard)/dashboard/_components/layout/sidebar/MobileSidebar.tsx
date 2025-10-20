import { X } from "lucide-react";
import { NavItem } from "../DashboardLayout";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { NotImplemented } from "./NotImplemented";
import { Logo } from "@/app/_shared-components/Logo";
import { useAuthStore } from "@/src/stores/auth.store";
import { UserRoles } from "shared";

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
  const user = useAuthStore((s) => s.user);
  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 lg:hidden ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <Logo />
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="h-full flex flex-col px-3 py-4 space-y-1">
        <div className="flex-1">
          {navItems.map((item) => {
            if (item.notYetImplemented)
              return <NotImplemented navItem={item} key={item.href} />;
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
                    ? "bg-primary-50 text-primary-700 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span
                  className={item.active ? "text-primary-600" : "text-gray-400"}
                >
                  {item.icon}
                </span>
                <span className="">{item.label}</span>
              </Link>
            );
          })}
        </div>
        {/* Apply for developer role */}
        {user?.role != UserRoles.DEVELOPER &&
          user?.role !== UserRoles.ADMIN && (
            <div className="mb-20 p-4 ">
              <Link href={"/for-developers/apply"} className="p-button">
                Стать разработчиком
              </Link>
            </div>
          )}
      </nav>
    </aside>
  );
};
