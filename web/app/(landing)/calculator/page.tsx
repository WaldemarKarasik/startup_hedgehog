"use client";

import { useState } from "react";
import Header from "@/src/landing/components/Header";
import Footer from "@/src/landing/components/Footer";
import { Calculator, TrendingUp } from "lucide-react";

export default function CalculatorPage() {
  const [price, setPrice] = useState(500000);
  const [revenueShare, setRevenueShare] = useState(40);
  const [monthlyRevenue, setMonthlyRevenue] = useState(150000);

  const developerMonthlyIncome = (monthlyRevenue * revenueShare) / 100;
  const entrepreneurMonthlyIncome = monthlyRevenue - developerMonthlyIncome;
  const breakEvenMonths = Math.ceil(price / entrepreneurMonthlyIncome);
  const yearlyDeveloperIncome = developerMonthlyIncome * 12;
  const yearlyEntrepreneurIncome = entrepreneurMonthlyIncome * 12;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Calculator className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Калькулятор Revenue Share
            </h1>
            <p className="text-xl text-gray-600">
              Рассчитайте выгоду от партнёрства и срок окупаемости инвестиций
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6">Параметры сделки</h2>

              <div className="space-y-6">
                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Цена проекта
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min="0"
                      step="10000"
                    />
                    <div className="absolute right-4 top-3 text-gray-500">
                      ₽
                    </div>
                  </div>
                  <input
                    type="range"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    min="50000"
                    max="2000000"
                    step="50000"
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50 000 ₽</span>
                    <span>2 000 000 ₽</span>
                  </div>
                </div>

                {/* Revenue Share */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Revenue Share для разработчика
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={revenueShare}
                      onChange={(e) => setRevenueShare(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min="0"
                      max="100"
                    />
                    <div className="absolute right-4 top-3 text-gray-500">
                      %
                    </div>
                  </div>
                  <input
                    type="range"
                    value={revenueShare}
                    onChange={(e) => setRevenueShare(Number(e.target.value))}
                    min="10"
                    max="70"
                    step="5"
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10%</span>
                    <span>70%</span>
                  </div>
                </div>

                {/* Monthly Revenue */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Прогнозируемая месячная выручка
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={monthlyRevenue}
                      onChange={(e) =>
                        setMonthlyRevenue(Number(e.target.value))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      min="0"
                      step="10000"
                    />
                    <div className="absolute right-4 top-3 text-gray-500">
                      ₽/мес
                    </div>
                  </div>
                  <input
                    type="range"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    min="10000"
                    max="500000"
                    step="10000"
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10 000 ₽</span>
                    <span>500 000 ₽</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Break Even */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Срок окупаемости</h3>
                </div>
                <div className="text-6xl font-bold mb-2">{breakEvenMonths}</div>
                <div className="text-xl text-primary-100">
                  {breakEvenMonths === 1
                    ? "месяц"
                    : breakEvenMonths < 5
                    ? "месяца"
                    : "месяцев"}
                </div>
                <div className="mt-6 pt-6 border-t border-primary-400 text-sm text-primary-100">
                  После окупаемости вся прибыль будет чистой, но разработчик
                  продолжит получать свою долю
                </div>
              </div>

              {/* Monthly Income */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold mb-4">Ежемесячный доход</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <div className="text-sm text-blue-700 mb-1">
                        Разработчик
                      </div>
                      <div className="text-2xl font-bold text-blue-900">
                        {developerMonthlyIncome.toLocaleString("ru-RU")} ₽
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {revenueShare}%
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <div className="text-sm text-green-700 mb-1">
                        Предприниматель
                      </div>
                      <div className="text-2xl font-bold text-green-900">
                        {entrepreneurMonthlyIncome.toLocaleString("ru-RU")} ₽
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      {100 - revenueShare}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Yearly Income */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold mb-4">
                  Годовой доход (после окупаемости)
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Разработчик</span>
                    <span className="font-bold text-gray-900">
                      {yearlyDeveloperIncome.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Предприниматель</span>
                    <span className="font-bold text-gray-900">
                      {yearlyEntrepreneurIncome.toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Всего</span>
                      <span className="font-bold text-primary-600 text-lg">
                        {(monthlyRevenue * 12).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">
                  💡 Как работает Revenue Share?
                </h4>
                <p className="text-sm text-blue-800">
                  Вы платите фиксированную сумму за проект и делите будущую
                  прибыль с разработчиком. Это мотивирует разработчика
                  поддерживать проект и помогать с развитием. Обе стороны
                  заинтересованы в успехе!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
