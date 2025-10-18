"use client";

import { useState } from "react";

export default function Scenarios() {
  const scenarios = [
    {
      title: "Телеграм-канал о ЗОЖ → Бот для похудения",
      icon: "🥗",
      businessBefore: "Канал 50К подписчиков, монетизация только реклама",
      solution: "Telegram-бот для похудения и составления меню",
      fixedPrice: "300 000 ₽",
      revenueShare: "15%",
      customization: "Интеграция с каналом, база продуктов РФ, личный бренд",
      result: "Подписка 390 ₽/мес, 800 платных → +312К/мес дохода",
      rsPayment: "46 800 ₽/мес разработчику (15% от 312К)",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Интернет-магазин косметики → CRM для клиентов",
      icon: "💄",
      businessBefore: "Магазин 200 заказов/мес, учёт в Excel",
      solution: "CRM с автоматизацией и программой лояльности",
      fixedPrice: "400 000 ₽",
      revenueShare: "18%",
      customization: "Интеграция с сайтом, WhatsApp-рассылки, дизайн под бренд",
      result: "Repeat sales +40%, средний чек +25% → +180К/мес дохода",
      rsPayment: "32 400 ₽/мес разработчику (18% от 180К)",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Фитнес-студия → Приложение записи и оплаты",
      icon: "🏋️",
      businessBefore: "Студия 120 клиентов, запись через админа вручную",
      solution: "Мобильное приложение для записи и абонементов",
      fixedPrice: "450 000 ₽",
      revenueShare: "20%",
      customization:
        "Брендинг студии, интеграция с онлайн-кассой, push-уведомления",
      result: "Отказы -30%, клиентов +50 → +150К/мес дохода",
      rsPayment: "30 000 ₽/мес разработчику (20% от 150К)",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const [activeScenario, setActiveScenario] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Модельные сценарии использования
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Как существующий бизнес добавляет IT-инструмент через нашу платформу
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">
            ⚠️ Это модельные примеры для иллюстрации механики. Реальные кейсы
            появятся после запуска MVP.
          </p>
        </div>

        {/* Scenario selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setActiveScenario(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeScenario === index
                  ? `bg-gradient-to-r ${scenario.color} text-white shadow-lg`
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="mr-2">{scenario.icon}</span>
              {scenario.title.split(" → ")[0]}
            </button>
          ))}
        </div>

        {/* Active scenario details */}
        <div className="max-w-5xl mx-auto">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeScenario === index ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${scenario.color} p-8 text-white`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl">{scenario.icon}</div>
                    <h3 className="text-3xl font-bold">{scenario.title}</h3>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  {/* Before */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      📌 Бизнес до сделки
                    </h4>
                    <p className="text-gray-700">{scenario.businessBefore}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      💡 Купленное IT-решение
                    </h4>
                    <p className="text-gray-700 mb-4">{scenario.solution}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white rounded-xl p-4">
                        <div className="text-sm text-gray-600 mb-1">
                          Фикс. платёж
                        </div>
                        <div className="text-2xl font-bold text-indigo-600">
                          {scenario.fixedPrice}
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <div className="text-sm text-gray-600 mb-1">
                          Revenue Share
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          {scenario.revenueShare}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customization */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      🔧 Кастомизация (5-7 дней)
                    </h4>
                    <p className="text-gray-700">{scenario.customization}</p>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      📈 Результат через 3 месяца
                    </h4>
                    <p className="text-gray-700 mb-4">{scenario.result}</p>
                    <div className="bg-white rounded-xl p-4 border-2 border-green-200">
                      <div className="text-sm text-gray-600 mb-1">
                        Ежемесячный платёж разработчику
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {scenario.rsPayment}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        При росте вашего дохода растёт и выплата разработчику —
                        у него есть мотивация помогать
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market validation */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Почему эти цифры реалистичны?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">
                Средний чек разработки с нуля:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Telegram-бот: 500К-1.5М ₽</li>
                <li>• CRM система: 2-5М ₽</li>
                <li>• Мобильное приложение: 1-3М ₽</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">
                Типичная монетизация в РФ:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Подписка SaaS: 290-990 ₽/мес</li>
                <li>• Конверсия в платных: 1-5%</li>
                <li>• Рост дохода после CRM: +30-50%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
