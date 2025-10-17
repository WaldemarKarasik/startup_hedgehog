"use client";

export type AuthType = "buyer" | "developer";

interface AuthTypeToggleProps {
  value: AuthType;
  onChange: (type: AuthType) => void;
}

export default function AuthTypeToggle({
  value,
  onChange,
}: AuthTypeToggleProps) {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg mb-8">
      <button
        onClick={() => onChange("buyer")}
        className={`flex-1 px-4 py-3 rounded-md font-semibold transition-all duration-300 ${
          value === "buyer"
            ? "bg-white text-indigo-600 shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg">🛍️</span>
          <span>Ищу решение для бизнеса</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Владелец бизнеса
        </div>
      </button>

      <button
        onClick={() => onChange("developer")}
        className={`flex-1 px-4 py-3 rounded-md font-semibold transition-all duration-300 ${
          value === "developer"
            ? "bg-white text-indigo-600 shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg">💻</span>
          <span>Я разработчик</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Продавец готовых решений
        </div>
      </button>
    </div>
  );
}
