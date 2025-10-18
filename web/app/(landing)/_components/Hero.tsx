"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-indigo-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Готовые IT-решения{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              для вашего бизнеса
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Покупайте готовые продукты с кастомизацией под ваши задачи.
            <br />
            Платите разработчику за результат, а не за процесс.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/catalog"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Смотреть каталог
            </Link>

            <Link
              href="/calculator"
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-indigo-300 transition-colors shadow-lg"
            >
              Калькулятор стоимости
            </Link>
          </div>

          {/* Value Props */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                300-450К ₽
              </div>
              <div className="text-gray-600 font-medium">
                Фиксированный платёж за кастомизацию
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                5-7 дней
              </div>
              <div className="text-gray-600 font-medium">
                Интеграция и настройка под вас
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                5-20%
              </div>
              <div className="text-gray-600 font-medium">
                Revenue Share от вашей выручки
              </div>
            </div>
          </div>

          {/* Key benefit */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 bg-blue-50 rounded-lg p-6 border border-blue-200">
              <strong className="text-blue-900">Почему это выгодно:</strong>{" "}
              Разработчик заинтересован в вашем успехе — чем больше вы
              зарабатываете, тем больше получает он. Долгосрочное партнёрство
              вместо разовой сделки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
