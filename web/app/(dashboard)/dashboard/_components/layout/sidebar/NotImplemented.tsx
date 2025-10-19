import { NavItem } from "../DashboardLayout";

export const NotImplemented = ({ navItem }: { navItem: NavItem }) => {
  return (
    <p
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
        navItem.active
          ? "bg-primary-50 text-primary-700 font-medium shadow-sm"
          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <span className={navItem.active ? "text-primary-600" : "text-gray-400"}>
        {navItem.icon}
      </span>
      <span className="text-sm">{navItem.label} </span>
      {navItem.notYetImplemented && (
        <span className="ml-auto text-red-600 text-sm">Скоро</span>
      )}
    </p>
  );
};
