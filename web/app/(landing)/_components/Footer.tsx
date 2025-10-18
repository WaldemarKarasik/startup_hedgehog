import Link from "next/link";
import { Rocket, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Rocket className="w-6 h-6" />
              StartAppЁж
            </div>
            <p className="text-sm">
              Готовые IT-решения для владельцев бизнеса. Кастомизация за 5-7
              дней и долгосрочная поддержка через Revenue Share.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Платформа</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/catalog"
                  className="hover:text-white transition-colors"
                >
                  Каталог проектов
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="hover:text-white transition-colors"
                >
                  Калькулятор Revenue Share
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  Как это работает
                </Link>
              </li>
              <li>
                <Link
                  href="/add-project"
                  className="hover:text-white transition-colors"
                >
                  Добавить проект
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Связаться</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:hello@startupezh.ru"
                  className="hover:text-white transition-colors"
                >
                  hello@startupezh.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <a
                  href="https://t.me/startupezh"
                  className="hover:text-white transition-colors"
                >
                  Telegram канал
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 StartupЁж. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
