"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Я покупаю готовый проект или заказываю разработку?",
      answer:
        "Вы покупаете готовое IT-решение (уже работающий код), которое разработчик дорабатывает под ваш бизнес за 5-7 дней. Это не разработка с нуля — основной функционал уже есть, нужна только кастомизация (интеграции, дизайн, специфичные фичи).",
    },
    {
      question: "Что такое Revenue Share от дохода IT-решения?",
      answer:
        "Вы платите разработчику процент от прибыли, которую приносит именно купленное IT-решение. Например: телеграм-бот принёс +312К прибыли в месяц → при RS 15% вы платите 46 800 ₽ разработчику. Если решение не принесло дохода — платить не нужно.",
    },
    {
      question: "Как доказать, сколько заработало IT-решение?",
      answer:
        "Пока что — вручную: вы отправляете отчёт с цифрами каждый месяц. Платформа проверяет на адекватность (смотрит на динамику, сравнивает с рынком). Если есть подозрение на обман — запрос подтверждающих документов или медиация. \nВ дальнейшем — интеграция с платежной системой для автоматической отправки отчета",
    },
    {
      question: "Могу ли я менять код после покупки?",
      answer:
        "Да! После покупки код принадлежит вам. Можете менять что угодно, добавлять функции, интегрировать с другими системами. Единственное ограничение — нельзя перепродавать как свой продукт на подобных платформах.",
    },
    {
      question: "Что входит в кастомизацию за 5-7 дней?",
      answer:
        "Адаптация под ваш бизнес: интеграция с вашими системами (сайт, CRM, мессенджеры), брендинг (логотип, цвета, тексты), добавление специфичных фич из вашей ниши. Объём работ обговаривается до сделки и включён в фиксированный платёж.",
    },
    {
      question: "Это законно?",
      answer:
        "Да, полностью! Revenue Share = долевое участие в прибыли (легально в РФ). Договоры составлены юристами. Электронная подпись юридически значима (ФЗ-63). Мы не арбитры (не требуется лицензия) — мы SaaS-платформа для сделок.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Всё, что нужно знать о StartupЁж
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`px-8 pb-6 text-gray-600 leading-relaxed transition-all duration-300 whitespace-pre-line ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <a
            href="mailto:hello@startupezh.ru"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Написать нам →
          </a>
        </div>
      </div>
    </section>
  );
}
