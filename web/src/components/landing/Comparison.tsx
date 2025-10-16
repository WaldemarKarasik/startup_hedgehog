"use client";

export default function Comparison() {
  const comparisons = [
    {
      criterion: "Время до запуска",
      platform: "5-7 дней",
      platformGood: true,
      freelancer: "2-4 месяца",
      freelancerGood: false,
    },
    {
      criterion: "Стоимость",
      platform: "300-450К + RS 5-20%",
      platformGood: true,
      freelancer: "800К - 1.5М ₽",
      freelancerGood: false,
    },
    {
      criterion: "Риск провала",
      platform: "Минимальный (код работает)",
      platformGood: true,
      freelancer: "Высокий (может бросить)",
      freelancerGood: false,
    },
    {
      criterion: "Качество кода",
      platform: "Протестировано другими",
      platformGood: true,
      freelancer: "Неизвестно до конца",
      freelancerGood: false,
    },
    {
      criterion: "Долгосрочная поддержка",
      platform: "Мотивирован RS",
      platformGood: true,
      freelancer: "Доп. оплата каждый раз",
      freelancerGood: false,
    },
    {
      criterion: "Экспертиза",
      platform: "Знает решение досконально",
      platformGood: true,
      freelancer: "Учится на ваших деньгах",
      freelancerGood: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            ❓ Главный вопрос
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Почему не нанять фрилансера?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Честное сравнение: готовое решение на платформе vs разработка с нуля
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop version */}
          <div className="hidden md:block bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <div className="p-6 font-bold text-lg">Критерий</div>
              <div className="p-6 font-bold text-lg text-center border-l border-white/20">
                StartupЁж
              </div>
              <div className="p-6 font-bold text-lg text-center border-l border-white/20">
                Фрилансер
              </div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="p-6 font-semibold text-gray-900 flex items-center">
                  {item.criterion}
                </div>
                <div className="p-6 border-l border-gray-200 text-center">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                      item.platformGood
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span>{item.platformGood ? "✓" : "✗"}</span>
                    <span className="font-medium">{item.platform}</span>
                  </div>
                </div>
                <div className="p-6 border-l border-gray-200 text-center">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                      item.freelancerGood
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span>{item.freelancerGood ? "✓" : "✗"}</span>
                    <span className="font-medium">{item.freelancer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile version */}
          <div className="md:hidden space-y-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 font-bold">
                  {item.criterion}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">StartupЁж</div>
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                        item.platformGood
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      <span>{item.platformGood ? "✓" : "✗"}</span>
                      <span className="font-medium">{item.platform}</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Фрилансер</div>
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                        item.freelancerGood
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      <span>{item.freelancerGood ? "✓" : "✗"}</span>
                      <span className="font-medium">{item.freelancer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom explanation */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Когда фрилансер всё-таки лучше?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>
                  Нужно что-то очень специфичное, чего нет в нашем каталоге
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>
                  Вы хотите полный контроль над архитектурой и технологиями
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>
                  Не хотите делиться выручкой долгосрочно (но заплатите в 2-3
                  раза больше сразу)
                </span>
              </li>
            </ul>
            <p className="mt-6 text-gray-600 italic">
              Для 80% задач малого и среднего бизнеса готовое решение +
              кастомизация — оптимальный выбор.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
