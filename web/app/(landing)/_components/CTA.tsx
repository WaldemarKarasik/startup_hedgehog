"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* For Buyers */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
            <div className="text-white mb-6">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-3xl font-bold mb-3">Владельцам бизнеса</h3>
              <p className="text-white/90 text-lg">
                Готовые продукты с кастомизацией
              </p>
            </div>

            <Link
              href="/catalog"
              className="block w-full px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg text-center hover:bg-gray-100 transition-colors"
            >
              Смотреть каталог
            </Link>

            <div className="mt-6 space-y-3 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Кастомизация за 5-7 дней</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Платите за результат</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Долгосрочная поддержка</span>
              </div>
            </div>
          </div>

          {/* For Developers */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
            <div className="text-white mb-6">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-3xl font-bold mb-3">Разработчикам</h3>
              <p className="text-white/90 text-lg">
                Продавайте готовые решения
              </p>
            </div>

            <Link
              href="/sign-up"
              className="block w-full px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg text-center hover:bg-gray-100 transition-colors"
            >
              Подать заявку
            </Link>

            <div className="mt-6 space-y-3 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Фикс. платёж за кастомизацию</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>5-20% Revenue Share от выручки</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Долгосрочное партнёрство</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-16 text-center text-white/80 text-sm">
          <p>StartupЁж — Готовые IT-решения для бизнеса с Revenue Share</p>
        </div>
      </div>
    </section>
  );
}
