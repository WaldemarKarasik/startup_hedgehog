"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  DollarSign,
  TrendingDown,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function BusinessCalculator() {
  // Параметры согласно CORE_CONCEPT
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(312000); // Ожидаемая выручка от IT-решения
  const [revenueSharePercent, setRevenueSharePercent] = useState<number>(10); // RS, который предлагает разработчик
  const [fixedPrice, setFixedPrice] = useState<number>(350000); // Фикс. платёж за кастомизацию
  const [customizationDays, setCustomizationDays] = useState<number>(6); // 5-7 дней

  // Альтернатива (фриланс)
  const [freelanceCost, setFreelanceCost] = useState<number>(875000); // 2.5x от фикс. платежа
  const [freelanceDuration, setFreelanceDuration] = useState<number>(75); // 2.5 месяца в днях

  const [results, setResults] = useState({
    // StartupЁж
    totalCostYear1: 0,
    totalCostYear2: 0,
    totalCostYear3: 0,
    monthlyRSPayment: 0,
    timeSaved: 0,

    // Сравнение
    savings: 0,
    savingsPercent: 0,
    paybackMonths: 0,
    netSavings3Years: 0,
  });

  useEffect(() => {
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    monthlyRevenue,
    revenueSharePercent,
    fixedPrice,
    customizationDays,
    freelanceCost,
    freelanceDuration,
  ]);

  const calculate = () => {
    const monthlyRSPayment = monthlyRevenue * (revenueSharePercent / 100);

    // Расчёт затрат StartupЁж
    const totalCostYear1 = fixedPrice + monthlyRSPayment * 12;
    const totalCostYear2 = monthlyRSPayment * 12;
    const totalCostYear3 = monthlyRSPayment * 12;
    const totalCost3Years = fixedPrice + monthlyRSPayment * 36;

    // Время
    const timeSaved = freelanceDuration - customizationDays;

    // Сравнение
    const savings = freelanceCost - fixedPrice; // Экономия на старте
    const savingsPercent = (savings / freelanceCost) * 100;

    // Окупаемость (сколько месяцев нужно, чтобы RS сравнялся с экономией на старте)
    // Если фриланс дороже на 525К, а RS 31.2К/мес, то 525/31.2 = 16.8 месяцев
    const paybackMonths =
      savings > 0 ? Math.round(savings / monthlyRSPayment) : 0;

    // Чистая экономия за 3 года (экономия на старте - RS за 3 года)
    const netSavings3Years = freelanceCost - totalCost3Years;

    setResults({
      totalCostYear1: Math.round(totalCostYear1),
      totalCostYear2: Math.round(totalCostYear2),
      totalCostYear3: Math.round(totalCostYear3),
      monthlyRSPayment: Math.round(monthlyRSPayment),
      timeSaved,
      savings: Math.round(savings),
      savingsPercent: Math.round(savingsPercent * 10) / 10,
      paybackMonths,
      netSavings3Years: Math.round(netSavings3Years),
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
          <div className="lg:col-span-2 space-y-6">
            {/* StartupЁж Parameters */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Готовое решение
                </h2>
              </div>

              <div className="space-y-6">
                {/* Fixed Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Стоимость кастомизации
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={fixedPrice}
                      onChange={(e) => setFixedPrice(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-xl font-bold text-green-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      step="10000"
                      min="300000"
                      max="450000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400">
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
                    className="w-full mt-3 accent-green-600"
                  />
                </div>

                {/* Customization Days */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Время на кастомизацию (дней)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={customizationDays}
                      onChange={(e) =>
                        setCustomizationDays(Number(e.target.value))
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-xl font-bold text-green-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      step="1"
                      min="5"
                      max="7"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400">
                      дней
                    </span>
                  </div>
                </div>

                {/* Monthly Revenue */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Ожидаемая выручка от решения
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={monthlyRevenue}
                      onChange={(e) =>
                        setMonthlyRevenue(Number(e.target.value))
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-xl font-bold text-green-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      step="10000"
                      min="50000"
                      max="1000000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400">
                      ₽/мес
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
                </div>

                {/* Revenue Share Percent */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Revenue Share % (предложение разработчика)
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
                      className="flex-1 h-3 accent-green-600"
                    />
                    <div className="text-3xl font-extrabold text-green-600 min-w-[70px] text-center">
                      {revenueSharePercent}%
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ежемесячно:{" "}
                    <strong>
                      {formatRub((monthlyRevenue * revenueSharePercent) / 100)}{" "}
                      ₽
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Freelance Parameters */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Разработка с нуля
                </h2>
              </div>

              <div className="space-y-6">
                {/* Freelance Cost */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Стоимость разработки
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={freelanceCost}
                      onChange={(e) => setFreelanceCost(Number(e.target.value))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-xl font-bold text-gray-700 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                      step="50000"
                      min="500000"
                      max="2000000"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400">
                      ₽
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="2000000"
                    step="50000"
                    value={freelanceCost}
                    onChange={(e) => setFreelanceCost(Number(e.target.value))}
                    className="w-full mt-3 accent-gray-600"
                  />
                </div>

                {/* Freelance Duration */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Время разработки (дней)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={freelanceDuration}
                      onChange={(e) =>
                        setFreelanceDuration(Number(e.target.value))
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl text-xl font-bold text-gray-700 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all"
                      step="15"
                      min="60"
                      max="120"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400">
                      дней
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    ≈ {Math.round(freelanceDuration / 30)} месяца
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Result - Savings */}
            <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingDown className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">
                    Ваша экономия на старте
                  </h3>
                </div>
                <div className="text-6xl font-extrabold mb-4">
                  {formatRub(results.savings)} ₽
                </div>
                <div className="flex items-center gap-2 text-green-100 text-lg mb-6">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>
                    Экономия {results.savingsPercent}% от стоимости фриланса
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                  <div>
                    <div className="text-green-100 text-sm mb-1">
                      Готовое решение:
                    </div>
                    <div className="text-2xl font-bold">
                      {formatRub(fixedPrice)} ₽
                    </div>
                  </div>
                  <div>
                    <div className="text-green-100 text-sm mb-1">Фриланс:</div>
                    <div className="text-2xl font-bold">
                      {formatRub(freelanceCost)} ₽
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Saved */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Экономия времени
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {results.timeSaved} дней
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">
                    Готово через:
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {customizationDays} дней
                  </div>
                  <div className="text-sm text-gray-500">
                    vs {freelanceDuration} дней
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Общие затраты по годам
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                  <span className="font-semibold text-gray-900">Год 1:</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatRub(results.totalCostYear1)} ₽
                  </span>
                </div>
                <div className="text-xs text-gray-600 -mt-2 ml-4">
                  Фикс. платёж {formatRub(fixedPrice)} ₽ + RS{" "}
                  {formatRub(results.monthlyRSPayment)} ₽/мес × 12
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold text-gray-900">Год 2:</span>
                  <span className="text-xl font-bold text-gray-700">
                    {formatRub(results.totalCostYear2)} ₽
                  </span>
                </div>
                <div className="text-xs text-gray-600 -mt-2 ml-4">
                  Только RS {formatRub(results.monthlyRSPayment)} ₽/мес × 12
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-semibold text-gray-900">Год 3:</span>
                  <span className="text-xl font-bold text-gray-700">
                    {formatRub(results.totalCostYear3)} ₽
                  </span>
                </div>

                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">
                      Итого за 3 года:
                    </span>
                    <span className="text-2xl font-extrabold text-green-600">
                      {formatRub(
                        results.totalCostYear1 +
                          results.totalCostYear2 +
                          results.totalCostYear3
                      )}{" "}
                      ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payback Period */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Окупаемость
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Вы экономите{" "}
                  <strong className="text-green-600">
                    {formatRub(results.savings)} ₽
                  </strong>{" "}
                  на старте, но платите{" "}
                  <strong>{formatRub(results.monthlyRSPayment)} ₽/мес</strong>{" "}
                  Revenue Share.
                </p>
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Экономия &ldquo;сгорит&rdquo; через:
                    </span>
                    <span className="text-3xl font-bold text-orange-600">
                      {results.paybackMonths} мес
                    </span>
                  </div>
                </div>
                {results.netSavings3Years > 0 ? (
                  <p className="text-sm text-green-700 bg-green-50 rounded-lg p-3 border border-green-200">
                    ✅ За 3 года вы всё равно сэкономите{" "}
                    <strong>{formatRub(results.netSavings3Years)} ₽</strong> по
                    сравнению с фрилансом!
                  </p>
                ) : (
                  <p className="text-sm text-red-700 bg-red-50 rounded-lg p-3 border border-red-200">
                    ⚠️ За 3 года готовое решение обойдётся дороже на{" "}
                    <strong>
                      {formatRub(Math.abs(results.netSavings3Years))} ₽
                    </strong>
                  </p>
                )}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Сравнение
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                        Параметр
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-green-600">
                        Готовое решение
                      </th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-gray-600">
                        Фриланс
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">
                        Стоимость старта
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-green-600">
                        {formatRub(fixedPrice)} ₽
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-gray-900">
                        {formatRub(freelanceCost)} ₽
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">
                        Время запуска
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-green-600">
                        {customizationDays} дней
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-gray-900">
                        {freelanceDuration} дней
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">
                        Долгосрочные затраты
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-orange-600">
                        {formatRub(results.monthlyRSPayment)} ₽/мес
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-green-600">
                        0 ₽
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">
                        Поддержка
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-green-600">
                        Включена (RS)
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-gray-900">
                        Доп. оплата
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">
                        Мотивация разработчика
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-green-600">
                        Высокая ✅
                      </td>
                      <td className="py-3 px-2 text-center font-bold text-gray-900">
                        Нулевая ❌
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Example from CORE_CONCEPT */}
        <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Реальный кейс
            </h3>
            <div className="bg-white rounded-xl p-6 mb-4">
              <h4 className="font-bold text-lg mb-3 text-green-900">
                Владелец Telegram-канала о ЗОЖ (50К подписчиков)
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-semibold text-green-700 mb-2">
                    ✅ Готовое решение (StartupЁж)
                  </div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                      • Фикс: <strong>300 000 ₽</strong>
                    </li>
                    <li>
                      • Запуск: <strong>6 дней</strong>
                    </li>
                    <li>
                      • RS: <strong>31 200 ₽/мес</strong> (10% от 312К)
                    </li>
                    <li>
                      • За 2 года: <strong>1 048 800 ₽</strong>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    ❌ Фриланс
                  </div>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                      • Стоимость: <strong>800 000 ₽</strong>
                    </li>
                    <li>
                      • Разработка: <strong>2.5 месяца</strong>
                    </li>
                    <li>
                      • Поддержка: <strong>доп. оплата</strong>
                    </li>
                    <li>
                      • Риски: <strong>высокие</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-green-600 text-white rounded-xl p-4 text-center">
              <p className="font-bold text-lg">
                Экономия на старте: <span className="text-2xl">500 000 ₽</span>{" "}
                • Запуск в <span className="text-2xl">10x</span> быстрее
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Готовы добавить IT-решение к вашему бизнесу?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Просмотрите каталог готовых решений или свяжитесь с нами для
              консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Смотреть решения
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-lg hover:border-green-600 hover:text-green-600 transition-all duration-200"
              >
                Калькулятор для разработчиков
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
