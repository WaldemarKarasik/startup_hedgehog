"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  audience: "developer" | "buyer" | "both";
}

const faqData: FAQItem[] = [
  // Для разработчиков
  {
    question: "Какие модели оплаты доступны для продажи моего проекта?",
    answer:
      "Мы предлагаем три гибких модели:\n\n1. **Партнёрская модель (0₽ + Revenue Share)**: Покупатель получает проект бесплатно и платит вам 50-70% от прибыли на 5 лет. Идеально для максимизации долгосрочного дохода.\n\n2. **Гибридная модель (Фикс + Revenue Share)**: Покупатель платит начальную цену (например, 3М₽) + 30% от прибыли на 3 года. Баланс между немедленным cash и долгосрочным доходом.\n\n3. **Классическая продажа (только фикс)**: Разовая сделка без Revenue Share. Вы получаете всю сумму сразу и завершаете отношения.",
    audience: "developer",
  },
  {
    question:
      'Почему я должен выбрать модель "только Revenue Share" вместо разовой продажи?',
    answer:
      "При успешном проекте вы зарабатываете **в 2-3 раза больше** на длинной дистанции:\n\n**Пример:** Проект приносит 150К₽/мес прибыли\n- Разовая продажа: 2М₽ один раз\n- Revenue Share (60% на 5 лет): 90К × 60 мес = **5.4М₽**\n\nПлюс покупатель максимально мотивирован развивать проект, так как у него нет огромных начальных затрат. Это win-win: больше покупателей = больше шансов продать, больше прибыль = больше ваших выплат.",
    audience: "developer",
  },
  {
    question:
      "Как я буду получать выплаты Revenue Share? Не обманет ли покупатель?",
    answer:
      "Ваша безопасность — наш приоритет:\n\n1. **Интеграция платежей**: Все платежи покупателя идут через наш escrow-счёт. Мы автоматически отслеживаем выручку.\n\n2. **Прозрачность**: В личном кабинете вы видите реальную статистику продаж покупателя в real-time.\n\n3. **Автоматические выплаты**: Каждый месяц ваш процент автоматически перечисляется на ваш счёт.\n\n4. **Арбитраж**: Договор с прописанной ответственностью за сокрытие доходов. При споре — независимый аудит.",
    audience: "developer",
  },
  {
    question:
      "Что если покупатель не сможет развить проект и не будет прибыли?",
    answer:
      "Это главный риск модели Revenue Share. Однако:\n\n1. **Предквалификация**: Мы отбираем покупателей с релевантным опытом и ресурсами для развития.\n\n2. **Поддержка**: В ваших интересах помочь покупателю на старте (техподдержка, консультации) — это увеличит ваши будущие выплаты.\n\n3. **Минимальные гарантии**: Можно прописать минимальные выплаты (например, 20К₽/мес независимо от прибыли первые 6 месяцев).\n\n4. **Альтернатива**: Если вы не готовы к риску, выбирайте гибридную модель с начальной оплатой.",
    audience: "developer",
  },
  {
    question: "Сколько берёт платформа с моих выплат?",
    answer:
      "Мы берём **20% комиссии только с Revenue Share выплат**, которые вы получаете от покупателя.\n\n**Пример:**\nПокупатель заработал 150К₽ прибыли\nВаша доля (60%): 90К₽\nКомиссия платформы (20% от 90К): 18К₽\n**Вы получаете:** 72К₽\n\n**Важно:**\n- Комиссия ТОЛЬКО с Revenue Share, не с начальной цены\n- Размещение проекта: 100% бесплатно\n- Модерация: бесплатно\n- Нет скрытых платежей",
    audience: "developer",
  },

  // Для покупателей
  {
    question: "Могу ли я купить стартап вообще без денег?",
    answer:
      '**Да!** Это наше главное УТП.\n\nВыбирая модель "Только Revenue Share", вы:\n- Платите **0₽ сейчас**\n- Получаете полный доступ к проекту\n- Платите разработчику только процент от **прибыли** (не выручки!)\n\nЭто позволяет запустить бизнес даже студентам или сотрудникам без стартового капитала. Вы рискуете только временем, а не деньгами.',
    audience: "buyer",
  },
  {
    question: "Почему разработчик соглашается отдать проект за 0₽?",
    answer:
      "Разработчик зарабатывает больше на длинной дистанции:\n\n**Его логика:**\n- Разовая продажа: 2-3М₽ один раз, долго искать покупателя\n- Revenue Share: 0₽ сейчас, но 50-70% прибыли = 5-10М₽ за 5 лет\n\n**Плюс:**\n- Больше покупателей (без капитала)\n- Быстрее продажа\n- Долгосрочный пассивный доход\n- Мотивация помогать вам = выше шанс успеха",
    audience: "buyer",
  },
  {
    question: 'Что значит "процент от прибыли", а не от выручки?',
    answer:
      '**Прибыль = Выручка минус расходы**\n\n**Пример:**\nВыручка: 500К₽/мес\nРасходы (сервера, реклама, зарплаты): 350К₽\n**Прибыль:** 150К₽\n\nRevenue Share 60% → Разработчику: 90К₽, Вам остаётся: 60К₽\n\n**Важно:** В договоре чётко прописаны разрешённые расходы. Нельзя накрутить "расходы" чтобы скрыть прибыль — это мошенничество с юридическими последствиями.',
    audience: "buyer",
  },
  {
    question: "Какую модель выбрать: Фикс+RS, только RS или только Фикс?",
    answer:
      "**Зависит от вашей ситуации:**\n\n**Только Revenue Share (0₽ + 50-70% на 5 лет):**\n- ✅ У вас нет стартового капитала\n- ✅ Вы готовы делиться прибылью\n- ✅ Хотите поддержку разработчика\n\n**Фикс + Revenue Share (3М + 30% на 3 года):**\n- ✅ Есть капитал, но хотите мотивировать разработчика\n- ✅ Хотите баланс риска\n- ✅ Меньший % RS = больше остаётся вам\n\n**Только Фикс (2М разовая):**\n- ✅ Есть капитал и уверенность в себе\n- ✅ Не хотите делиться долгосрочно\n- ✅ Готовы развивать сами без помощи разработчика",
    audience: "buyer",
  },
  {
    question: "На сколько лет заключается Revenue Share договор?",
    answer:
      "Обычно **3-5 лет**, в зависимости от модели:\n\n- **Только RS:** 5 лет (компенсация за 0₽ сейчас)\n- **Фикс + RS:** 3 года (уже заплатили начальную цену)\n\n**После окончания:**\nВы становитесь 100% владельцем без выплат разработчику.\n\n**Досрочное завершение:**\nМожно выкупить оставшийся период (прописано в договоре). Например, через 2 года выкупить оставшиеся 3 года сразу.",
    audience: "buyer",
  },
  {
    question: "Что получу после покупки? Только код или и поддержку?",
    answer:
      "Вы получаете **комплексный пакет:**\n\n**Техническое:**\n- Полный исходный код\n- База данных (если есть)\n- Документация по развёртыванию\n- Доступы к серверам/доменам\n\n**Поддержка от разработчика:**\n- Интеграция и настройка (первые 2 недели)\n- Техподдержка (3-6 месяцев базовая)\n- Консультации по развитию\n- Доработки критичных багов\n\n**Юридическое:**\n- Договор с прописанными условиями\n- Передача прав на код\n- NDA (при необходимости)",
    audience: "buyer",
  },

  // Для обеих сторон
  {
    question: "Как платформа контролирует честность сделки?",
    answer:
      "**Многоуровневая защита:**\n\n1. **Escrow-счета:** Все платежи идут через нас, мы видим реальные цифры\n2. **Интеграция платёжных систем:** Прямое API подключение (ЮKassa, CloudPayments)\n3. **Реал-тайм дашборд:** Обе стороны видят одинаковую статистику\n4. **Аудит при спорах:** Независимая проверка финансов\n5. **Юридическая ответственность:** Договор с штрафами за мошенничество\n\n**Наша репутация = ваша безопасность.** Мы зарабатываем только когда обе стороны довольны.",
    audience: "both",
  },
  {
    question: "Что если мы не сойдёмся в цене/условиях?",
    answer:
      "Всё гибко:\n\n1. **Переговоры:** Вы можете договориться о любых условиях (% RS, срок, минимальные выплаты)\n2. **Калькулятор:** Используйте наш калькулятор для моделирования разных сценариев\n3. **Наша помощь:** Менеджер платформы помогает найти компромисс\n4. **Никаких обязательств:** Пока не подписан договор, любая сторона может отказаться",
    audience: "both",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "developer" | "buyer">("all");

  const filteredFAQ = faqData.filter(
    (item) =>
      filter === "all" || item.audience === filter || item.audience === "both"
  );

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="FAQ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Частые вопросы о моделях оплаты
          </h2>
          <p className="text-xl text-gray-600">
            Всё, что нужно знать о Revenue Share и других моделях
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === "all"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Все вопросы
          </button>
          <button
            onClick={() => setFilter("developer")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === "developer"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Для разработчиков
          </button>
          <button
            onClick={() => setFilter("buyer")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              filter === "buyer"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Для покупателей
          </button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <div className="prose prose-sm max-w-none text-gray-700">
                    {item.answer.split("\n\n").map((paragraph, pIndex) => {
                      // Handle bold markdown
                      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                      return (
                        <p key={pIndex} className="mb-3 last:mb-0">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith("**") && part.endsWith("**")) {
                              return (
                                <strong
                                  key={partIndex}
                                  className="font-semibold text-gray-900"
                                >
                                  {part.slice(2, -2)}
                                </strong>
                              );
                            }
                            return part;
                          })}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-primary-50 rounded-xl p-8 border border-primary-200">
          <h3 className="text-2xl font-bold mb-3">Остались вопросы?</h3>
          <p className="text-gray-700 mb-6">
            Свяжитесь с нами, и мы поможем выбрать подходящую модель для вашей
            ситуации
          </p>
          <a
            href="mailto:support@startupezh.ru"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Написать в поддержку
          </a>
        </div>
      </div>
    </section>
  );
}
