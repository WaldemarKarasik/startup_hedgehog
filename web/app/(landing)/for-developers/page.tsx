"use client";

import Footer from "@/src/landing/components/Footer";
import Header from "@/src/landing/components/Header";
import Link from "next/link";

export default function ForDevelopers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 pt-20 pb-32 text-white">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block px-4 py-2 mb-8 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-semibold">
                💰 Первым 10 разработчикам — комиссия 5% вместо 10%
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Превратите свой код в
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  источник пассивного дохода
                </span>
              </h1>

              <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl text-indigo-200 leading-relaxed">
                Продавайте готовые IT-решения владельцам существующего бизнеса +
                кастомизация + долгосрочный доход
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/for-developers/apply"
                  className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-200"
                >
                  Подать заявку →
                </Link>
                <Link
                  href="/catalog"
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-200"
                >
                  Примеры продуктов
                </Link>
              </div>

              <p className="mt-8 text-indigo-300 text-sm">
                📋 Проверка заявки 1-2 дня • 🎯 Approval rate ~20-30%
              </p>
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-16 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  3-5x
                </div>
                <div className="text-gray-600">больше чем разовая продажа</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  15-20%
                </div>
                <div className="text-gray-600">ежемесячный Revenue Share</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  300-450К
                </div>
                <div className="text-gray-600">средний фикс. платёж</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  5-7 дней
                </div>
                <div className="text-gray-600">на кастомизацию</div>
              </div>
            </div>
          </div>
        </section>

        {/* Сравнение с другими моделями */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Сравните с другими способами монетизации
              </h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Модель</th>
                    <th className="px-6 py-4 text-center font-bold">
                      Разовый доход
                    </th>
                    <th className="px-6 py-4 text-center font-bold">
                      Долгосрочный доход
                    </th>
                    <th className="px-6 py-4 text-center font-bold">
                      Работа после продажи
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      StartupЁж (RS)
                    </td>
                    <td className="px-6 py-4 text-center text-green-700 font-bold">
                      300-450К
                    </td>
                    <td className="px-6 py-4 text-center text-green-700 font-bold">
                      40-60К/мес × 24-36 мес
                    </td>
                    <td className="px-6 py-4 text-center text-green-700">
                      Кастомизация (5-7 дней) + поддержка
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Фриланс (разовая)
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      300-500К
                    </td>
                    <td className="px-6 py-4 text-center text-red-600">0 ₽</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Разработка с нуля (1-3 мес)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Marketplace
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      100-200 ₽ × продажи
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Зависит от продаж
                    </td>
                    <td className="px-6 py-4 text-center text-red-600">
                      Нет кастомизации
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      SaaS самостоятельно
                    </td>
                    <td className="px-6 py-4 text-center text-red-600">
                      0 ₽ (первые 6-12 мес)
                    </td>
                    <td className="px-6 py-4 text-center text-green-600">
                      Высокий потенциал
                    </td>
                    <td className="px-6 py-4 text-center text-red-600">
                      Маркетинг, продажи, поддержка
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 max-w-3xl mx-auto bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                Пример расчёта
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>Вы продали Telegram-бота для трекинга калорий:</p>
                <ul className="space-y-2 ml-6">
                  <li>
                    • <strong>Фикс. платёж:</strong> 300 000 ₽
                  </li>
                  <li>
                    • <strong>Работа:</strong> 5-7 дней на кастомизацию под
                    клиента
                  </li>
                  <li>
                    • <strong>RS 15%:</strong> клиент зарабатывает 312К/мес →
                    вам 46 800 ₽/мес
                  </li>
                  <li>
                    • <strong>За 24 месяца:</strong> 300К + (46.8К × 24) ={" "}
                    <strong className="text-green-600">1 423 200 ₽</strong>
                  </li>
                </ul>
                <p className="text-sm italic text-gray-600 mt-4">
                  vs разовая продажа фрилансеру за 300-500К
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Как это работает */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Как это работает?
              </h2>
              <p className="text-xl text-gray-600">
                Простой процесс от заявки до пассивного дохода
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Подайте заявку",
                  description:
                    "Форма + ссылка на GitHub/демо. Мы проверяем качество кода и продукта.",
                  icon: "📝",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: "2",
                  title: "Approval в 1-2 дня",
                  description: "Мы тестируем продукт, проверяем код",
                  icon: "✅",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  step: "3",
                  title: "Мы находим покупателя",
                  description:
                    "Вы не продаёте сами! Мы ищем владельцев бизнеса, которым нужно ваше решение.",
                  icon: "🎯",
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  step: "4",
                  title: "Кастомизация + RS",
                  description:
                    "5-7 дней работы → фикс. платёж. Потом каждый месяц получаете 15-20% от прибыли клиента.",
                  icon: "💰",
                  color: "from-orange-500 to-red-500",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg`}
                  >
                    {item.step}
                  </div>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incentives для ранних разработчиков */}
        <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold mb-4">
                🔥 Только для первых 10 разработчиков
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Early Adopter Benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Комиссия 5%
                </h3>
                <p className="text-gray-600 mb-4">
                  Вместо стандартных 10% — только 5% от фикс. платежа.{" "}
                  <strong>Навсегда</strong>.
                </p>
                <div className="text-sm text-green-600 font-semibold">
                  Экономия: 15-22.5К с каждой сделки
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Гарантия первой сделки
                </h3>
                <p className="text-gray-600 mb-4">
                  Мы сами находим первого покупателя для вашего продукта в
                  течение 60 дней.
                </p>
                <div className="text-sm text-green-600 font-semibold">
                  Или вернём listing fee
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200">
                <div className="text-4xl mb-4">📢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Featured placement
                </h3>
                <p className="text-gray-600 mb-4">
                  Ваш продукт на главной странице
                </p>
                <div className="text-sm text-green-600 font-semibold">
                  Бесплатный маркетинг
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Требования к продукту */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                Какие продукты мы ищем?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                    <span>✅</span> Зелёные флаги
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>
                        <strong>Работающий продукт</strong> — с основным
                        функционалом
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>
                        <strong>GitHub repo</strong> — можем проверить качество
                        кода
                      </span>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>
                        <strong>Готовность кастомизировать</strong> — 5-7 дней
                        работы под клиента
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span>
                        <strong>Портфолио</strong> — опыт работы с клиентами
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
                    <span>❌</span> Красные флаги
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <span>
                        <strong>Только идея</strong> — нет рабочего кода
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <span>
                        <strong>"Сделаю после покупки"</strong> — нужен готовый
                        продукт
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <span>
                        <strong>Плохой код</strong> — баги, legacy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <span>
                        <strong>&quot;Продаю как есть&quot;</strong> — не готов
                        кастомизировать
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">✗</span>
                      <span>
                        <strong>Непрофессионализм</strong> — не отвечает,
                        токсичен
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🎯 Примеры идеальных продуктов
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Telegram-боты:</strong> трекинг калорий, финансы,
                    CRM, автоматизация
                  </li>
                  <li>
                    • <strong>CRM системы:</strong> для e-commerce, агентств,
                    B2B
                  </li>
                  <li>
                    • <strong>Booking системы:</strong> для салонов, студий,
                    клиник
                  </li>
                  <li>
                    • <strong>LMS платформы:</strong> для онлайн-школ,
                    корпоративного обучения
                  </li>
                  <li>
                    • <strong>Analytics дашборды:</strong> для маркетинга,
                    продаж, операций
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Готовы превратить код в пассивный доход?
            </h2>
            <p className="text-xl text-indigo-100 mb-12">
              Первым 10 разработчикам — комиссия 5% вместо 10% навсегда
            </p>
            <Link
              href="/for-developers/apply"
              className="inline-block px-12 py-6 bg-white text-indigo-600 rounded-xl font-bold text-xl shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-200"
            >
              Подать заявку →
            </Link>
            <p className="mt-8 text-indigo-200 text-sm">
              Проверка заявки 1-2 дня • Никаких комиссий до первой сделки
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
