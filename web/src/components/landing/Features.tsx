"use client";

export default function Features() {
  const forBuyers = [
    {
      icon: "⚡",
      title: "Time to market",
      description: "Запуск за 7 дней вместо 6-12 месяцев разработки с нуля",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: "🤝",
      title: "Revenue Share модель",
      description:
        "Разработчик остаётся с вами и помогает — он зарабатывает только когда зарабатываете вы",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: "🛡️",
      title: "Прозрачные условия",
      description:
        "Готовые договоры, электронная подпись и система разрешения споров",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const forDevelopers = [
    {
      icon: "💰",
      title: "Recurring доход",
      description:
        "Получайте 5-20% от выручки клиента каждый месяц за поддержку и обновления",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "🎯",
      title: "Клиенты с готовым бизнесом",
      description:
        "Покупатели — владельцы существующих бизнесов, которым нужно IT-решение",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "🔧",
      title: "Кастомизация включена",
      description:
        "5-7 дней на адаптацию под клиента. Фиксированный платёж за работу",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Buyers */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Для владельцев бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Добавьте IT-инструмент к существующему бизнесу за неделю
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forBuyers.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* For Developers */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Для разработчиков
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Продавайте готовые решения с кастомизацией
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forDevelopers.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
