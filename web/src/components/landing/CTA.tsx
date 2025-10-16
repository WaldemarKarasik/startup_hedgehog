"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* For Buyers */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
            <div className="text-white mb-6">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-3xl font-bold mb-3">Владельцам бизнеса</h3>
              <p className="text-white/90 text-lg">
                Добавьте IT-инструмент за неделю
              </p>
            </div>

            <Link
              href="/catalog"
              className="block w-full px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Смотреть решения →
            </Link>

            <div className="mt-6 space-y-3 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>50+ готовых IT-решений</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Доработка под вас за 5-7 дней</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Поддержка по Revenue Share</span>
              </div>
            </div>
          </div>

          {/* For Developers */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
            <div className="text-white mb-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-3xl font-bold mb-3">Разработчикам</h3>
              <p className="text-white/90 text-lg">
                Продавайте решения + кастомизация
              </p>
            </div>

            <Link
              href="/add-project"
              className="block w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold text-lg text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Разместить проект →
            </Link>

            <div className="mt-6 space-y-3 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Фикс. платёж + recurring доход</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>15-20% от прибыли клиента</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Клиенты с готовым бизнесом</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-16 text-center text-white/80 text-sm">
          <p>StartupЁж — Готовые IT-решения для бизнеса с Revenue Share</p>
          <p className="mt-2">Made with ❤️ in Russia</p>
        </div>
      </div>
    </section>
  );
}
