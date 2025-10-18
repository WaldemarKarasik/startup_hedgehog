"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TrendingUp, DollarSign, Clock, Zap, ArrowRight } from "lucide-react";

export default function DeveloperCalculator() {
  // Параметры согласно CORE_CONCEPT
  const [fixedPrice, setFixedPrice] = useState<number>(350000); // Фикс. платёж 300-450К
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(312000); // Выручка клиента
  const [revenueSharePercent, setRevenueSharePercent] = useState<number>(10); // 5-20% от выручки
  const [durationMonths, setDurationMonths] = useState<number>(24); // Длительность RS

  const [results, setResults] = useState({
    totalDeveloperIncome: 0,
    monthlyRSPayment: 0,
    totalRSPayments: 0,
    multiplier: 0,
  });

  useEffect(() => {
    calculateRevenueShare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fixedPrice, monthlyRevenue, revenueSharePercent, durationMonths]);

  const calculateRevenueShare = () => {
    // Расчёт согласно CORE_CONCEPT
    const monthlyRSPayment = monthlyRevenue * (revenueSharePercent / 100);
    const totalRSPayments = monthlyRSPayment * durationMonths;
    const totalDeveloperIncome = fixedPrice + totalRSPayments;
    const multiplier = totalDeveloperIncome / fixedPrice;

    setResults({
      totalDeveloperIncome: Math.round(totalDeveloperIncome),
      monthlyRSPayment: Math.round(monthlyRSPayment),
      totalRSPayments: Math.round(totalRSPayments),
      multiplier: Math.round(multiplier * 10) / 10,
    });
  };

  const formatRub = (amount: number) => {
    return new Intl.NumberFormat("ru-RU").format(amount);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Параметры вашего продукта
            </h2>

            <div className="space-y-8">
              {/* Fixed Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Фиксированный платёж за кастомизацию
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={fixedPrice}
                    onChange={(e) => setFixedPrice(Number(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-2xl font-bold text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    step="10000"
                    min="300000"
                    max="450000"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-gray-400">
                    ₽
                  </span>
                </div>
                <input
                  type="range"
                  min="300000"
                  max="450000"
                  step="10000"
                  value={fixedPrice}
                  onChange={(e) => setFixedPrice(Number(e.target.value))}
                  className="w-full mt-3 accent-indigo-600"
                />
                <p className="text-sm text-gray-500 mt-2">
                  300-450К — стандартный диапазон для 5-7 дней работы
                </p>
              </div>

              {/* Monthly Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Ожидаемая месячная выручка клиента
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-2xl font-bold text-green-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    step="10000"
                    min="50000"
                    max="1000000"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-gray-400">
                    ₽
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full mt-3 accent-green-600"
                />
                <p className="text-sm text-gray-500 mt-2">
                  От этой суммы считается Revenue Share
                </p>
              </div>

              {/* Revenue Share Percent */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Процент Revenue Share от выручки
                </label>
                <div className="flex items-center gap-4 mb-3">
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="1"
                    value={revenueSharePercent}
                    onChange={(e) =>
                      setRevenueSharePercent(Number(e.target.value))
                    }
                    className="flex-1 h-3 accent-purple-600"
                  />
                  <div className="text-4xl font-extrabold text-purple-600 min-w-[80px] text-center">
                    {revenueSharePercent}%
                  </div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Стратегия:</strong>{" "}
                    {revenueSharePercent <= 8 &&
                      "Конкурентная — быстрее привлечь клиентов"}
                    {revenueSharePercent > 8 &&
                      revenueSharePercent <= 12 &&
                      "Стандартная — баланс"}
                    {revenueSharePercent > 12 &&
                      "Премиум — для продуктов высокой ценности"}
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Длительность Revenue Share (месяцев)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(Number(e.target.value))}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl text-2xl font-bold text-orange-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    step="6"
                    min="12"
                    max="36"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl font-semibold text-gray-400">
                    мес
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="36"
                  step="6"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full mt-3 accent-orange-600"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Обычно 24-36 месяцев
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Result - Total Income */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Ваш общий доход</h3>
                </div>
                <div className="text-6xl font-extrabold mb-4">
                  {formatRub(results.totalDeveloperIncome)} ₽
                </div>
                <div className="flex items-center gap-2 text-indigo-100 text-lg">
                  <Clock className="w-5 h-5" />
                  <span>
                    За {durationMonths} месяцев (
                    {Math.round(durationMonths / 12)} года)
                  </span>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-indigo-200 mb-1">Фикс. платёж:</div>
                      <div className="text-xl font-bold">
                        {formatRub(fixedPrice)} ₽
                      </div>
                    </div>
                    <div>
                      <div className="text-indigo-200 mb-1">Revenue Share:</div>
                      <div className="text-xl font-bold">
                        {formatRub(results.totalRSPayments)} ₽
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly RS Payment */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Ежемесячный Revenue Share
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      {formatRub(results.monthlyRSPayment)} ₽
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {revenueSharePercent}% от {formatRub(monthlyRevenue)} ₽ месячной
                выручки клиента
              </p>
            </div>

            {/* Revenue Share Model Explanation */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Модель дохода
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong className="text-blue-900">Revenue Share</strong> —
                    это не пассивный доход. Вы получаете оплату за:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Техническую поддержку продукта</li>
                    <li>• Исправление багов</li>
                    <li>• Консультации клиента</li>
                    <li>• Обновления и улучшения</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="text-xs text-gray-600 mb-2">
                      Одноразовая продажа
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {formatRub(fixedPrice)} ₽
                    </div>
                    <div className="text-xs text-gray-500">
                      Клиент ушёл — доход закончился
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-xs text-blue-600 mb-2">
                      Долгосрочное партнёрство
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {formatRub(results.totalDeveloperIncome)} ₽
                    </div>
                    <div className="text-xs text-blue-600">
                      За {durationMonths} мес поддержки
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">
                      Ежемесячная выплата за поддержку:
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {formatRub(results.monthlyRSPayment)} ₽
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    {revenueSharePercent}% от выручки клиента — ваша мотивация
                    делать продукт успешным
                  </p>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                Разбивка дохода
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    1. Фикс. платёж (сразу после кастомизации):
                  </span>
                  <span className="font-bold text-gray-900">
                    {formatRub(fixedPrice)} ₽
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    2. Ежемесячно × {durationMonths} мес:
                  </span>
                  <span className="font-bold text-gray-900">
                    {formatRub(results.monthlyRSPayment)} ₽
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">3. Итого Revenue Share:</span>
                  <span className="font-bold text-gray-900">
                    {formatRub(results.totalRSPayments)} ₽
                  </span>
                </div>
                <div className="pt-3 border-t-2 border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      Общий доход:
                    </span>
                    <span className="text-xl font-extrabold text-indigo-600">
                      {formatRub(results.totalDeveloperIncome)} ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example from CORE_CONCEPT */}
        <div className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200 p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Пример из реальной жизни
            </h3>
            <div className="bg-white rounded-xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-indigo-900">
                Telegram-бот для трекинга калорий
              </h4>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Клиент:</strong> Владелец Telegram-канала о ЗОЖ (50К
                  подписчиков)
                </p>
                <p>
                  <strong>Продукт:</strong> Готовый бот для трекинга калорий
                </p>
                <p>
                  <strong>Кастомизация (6 дней):</strong> Интеграция с каналом,
                  база продуктов РФ, брендинг, меню для веганов
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">Фикс. платёж</div>
                <div className="text-2xl font-bold text-indigo-600">
                  300 000 ₽
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">
                  RS 10% × 24 мес
                </div>
                <div className="text-2xl font-bold text-green-600">
                  748 800 ₽
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">Итого</div>
                <div className="text-2xl font-bold text-purple-600">
                  1 048 800 ₽
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic text-center">
              В 3.5 раза больше, чем разовая продажа за 300К!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Хотите работать по модели Revenue Share?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Разместите свой продукт на StartupЁж. Мы подберём клиентов,
              готовых к долгосрочному партнёрству.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/for-developers/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors"
              >
                Подать заявку
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/for-developers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
