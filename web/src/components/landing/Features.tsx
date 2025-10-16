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
      title: "Passive income",
      description:
        "Получайте 10-20% от прибыли покупателя каждый месяц. В 4 раза больше чем разовая продажа",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "🎯",
      title: "Мы найдём покупателя",
      description: "Продвигаем ваш проект среди предпринимателей и стартапов",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "📈",
      title: "Защита и репутация",
      description:
        "Договор защищает ваши права. Честная отчётность с проверкой",
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
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
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
              Превратите свой код в источник пассивного дохода
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forDevelopers.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
