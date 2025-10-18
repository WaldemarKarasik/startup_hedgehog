import Link from "next/link";
import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-primary-600 font-bold text-xl"
        >
          <Rocket className="w-6 h-6" />
          StartAppЁж
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/catalog"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            Каталог
          </Link>
          <Link
            href="/calculator"
            className="text-gray-700 hover:text-primary-600 transition-colors"
          >
            Калькулятор
          </Link>
          <Link
            href="/for-developers"
            className="text-gray-700 hover:text-primary-600  transition-colors "
          >
            Разработчикам
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* <Link
            href="/add-project"
            className="hidden sm:block px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          >
            Добавить проект
          </Link> */}
          <Link
            href="/sign-in"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Войти
          </Link>
        </div>
      </nav>
    </header>
  );
}
