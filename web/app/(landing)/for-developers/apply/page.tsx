"use client";

import { useState } from "react";

import Link from "next/link";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import type { DeveloperApplicationForm } from "shared";

export default function Apply() {
  const [formData, setFormData] = useState<DeveloperApplicationForm>({
    name: "",
    email: "",
    telegram: "",
    productName: "",
    productDescription: "",
    customizationPrice: 300000,
    revenueSharePercent: "10",
    githubUrl: "",
    demoUrl: "",
    hasUsers: "",
    userCount: "",
    customizationReady: "",
    targetBusinesses: "",
    portfolio: "",
    videoUrl: "",
    additionalInfo: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:5173/api/developer-applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-green-200">
              <div className="text-6xl mb-6">✅</div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Заявка отправлена!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Мы проверим ваш продукт и свяжемся с вами в течение 1-2 рабочих
                дней.
              </p>
              <div className="bg-indigo-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3">Что дальше?</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li>1️⃣ Проверим качество кода на GitHub</li>
                  <li>2️⃣ Протестируем демо-версию</li>
                  <li>3️⃣ Созвонимся для обсуждения деталей</li>
                  <li>4️⃣ Одобрим заявку или дадим фидбэк</li>
                </ul>
              </div>
              <Link
                href="/for-developers"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all"
              >
                ← Вернуться на страницу для разработчиков
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              💰 Первым 10 — комиссия 5% навсегда
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Заявка на размещение продукта
            </h1>
            <p className="text-xl text-gray-600">
              Заполните форму — мы проверим ваш продукт и ответим в течение 1-2
              дней
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>⚠️</span> Важно перед подачей заявки:
            </h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>
                ✓ У вас должен быть <strong>работающий продукт</strong> (минимум
                MVP)
              </li>
              <li>
                ✓ Код должен быть на <strong>GitHub</strong> или аналоге
              </li>
              <li>
                ✓ Должно быть <strong>демо</strong> или видео-презентация
              </li>
              <li>
                ✓ Вы готовы <strong>кастомизировать</strong> продукт под
                клиентов
              </li>
              <li>
                ✓ Approval rate <strong>~20-30%</strong> — мы отбираем только
                качественные продукты
              </li>
            </ul>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <span>❌</span> Ошибка при отправке
              </h3>
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 space-y-8"
          >
            {/* Контактная информация */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                1. Контактная информация
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telegram <span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    value={formData.telegram}
                    onChange={(e) =>
                      setFormData({ ...formData, telegram: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="@username"
                  />
                </div>
              </div>
            </div>

            {/* О продукте */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                2. О вашем продукте
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Название продукта <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.productName}
                    onChange={(e) =>
                      setFormData({ ...formData, productName: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="CalorieTrackerBot"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Описание продукта <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.productDescription}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productDescription: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="Telegram-бот для трекинга калорий с базой продуктов РФ, подсчётом БЖУ и персональными рекомендациями..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Что делает продукт? Какие основные функции?
                  </p>
                </div>
                {/* Customization price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Стоимость кастомизации
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-4 text-3xl font-bold text-indigo-600  ">
                    <input
                      type="range"
                      min="300000"
                      max="450000"
                      step="1"
                      required
                      value={formData.customizationPrice}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customizationPrice: Number(e.target.value),
                        })
                      }
                      className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />

                    <input
                      className="text-right"
                      type={"number"}
                      size={5}
                      value={formData.customizationPrice}
                      min={300000}
                      max={450000}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customizationPrice: Number(e.target.value),
                        })
                      }
                    />
                    <span>₽</span>
                  </div>
                </div>
                {/* Revenue Share  */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Процент Revenue Share{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="1"
                      required
                      value={formData.revenueSharePercent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          revenueSharePercent: e.target.value,
                        })
                      }
                      className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="text-3xl font-bold text-indigo-600 min-w-[80px] text-center">
                      {formData.revenueSharePercent}%
                    </div>
                  </div>
                  <div className="mt-3 bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>От выручки</strong> клиента (не от прибыли)
                    </p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>
                        • <strong>5-8%:</strong> конкурентное преимущество,
                        быстрее привлечь клиентов
                      </div>
                      <div>
                        • <strong>8-12%:</strong> стандартная модель, баланс
                      </div>
                      <div>
                        • <strong>15-20%:</strong> премиум продукт с высокой
                        ценностью
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Например: клиент зарабатывает 300К/мес → вам{" "}
                    {Math.round(
                      (300 * parseInt(formData.revenueSharePercent)) / 100
                    )}
                    К/мес
                  </p>
                </div>
              </div>
            </div>

            {/* Ссылки и демо */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                3. Ссылки и демо
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    GitHub / GitLab репозиторий{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.githubUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, githubUrl: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="https://github.com/username/project"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Мы проверим качество кода
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ссылка на демо / работающую версию{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.demoUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, demoUrl: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="https://t.me/your_bot или https://demo.yourapp.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Видео-презентация продукта (2-3 мин){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.videoUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, videoUrl: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="https://youtube.com/watch?v=... или Loom"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Покажите как работает продукт, основные фичи
                  </p>
                </div>
              </div>
            </div>

            {/* Пользователи и готовность */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                4. Текущие пользователи
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Есть ли у продукта пользователи?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.hasUsers}
                    onChange={(e) =>
                      setFormData({ ...formData, hasUsers: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, есть платные пользователи</option>
                    <option value="demo">Да, есть demo users</option>
                    <option value="no">Нет, только личное использование</option>
                  </select>
                </div>
                {(formData.hasUsers === "yes" ||
                  formData.hasUsers === "demo") && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Сколько пользователей?
                    </label>
                    <input
                      type="text"
                      value={formData.userCount}
                      onChange={(e) =>
                        setFormData({ ...formData, userCount: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                      placeholder="Примерно 50-100 активных пользователей"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Готовы ли кастомизировать продукт под клиентов?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.customizationReady}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customizationReady: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">
                      Да, готов тратить 5-7 дней на каждого клиента
                    </option>
                    <option value="maybe">
                      Готов, но хочу обсудить детали
                    </option>
                    <option value="no">
                      Нет, продаю только &quot;как есть&quot;
                    </option>
                  </select>
                  <p className="text-sm text-gray-500 mt-2">
                    Кастомизация = интеграции, брендинг, специфичные фичи для
                    бизнеса клиента
                  </p>
                </div>
              </div>
            </div>

            {/* Целевая аудитория */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                5. Целевая аудитория
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Для каких типов бизнеса идеален ваш продукт?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.targetBusinesses}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        targetBusinesses: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="1. Владельцы Telegram-каналов о ЗОЖ/фитнесе с аудиторией 30К+&#10;2. Нутрициологи с клиентской базой&#10;3. Онлайн-школы здорового питания"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Опишите 1-2 конкретных типа бизнесов. Чем конкретнее, тем
                    лучше!
                  </p>
                </div>
              </div>
            </div>

            {/* Портфолио */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                6. Ваш опыт
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ссылки на 1-2 примера ваших работ
                  </label>
                  <textarea
                    rows={3}
                    value={formData.portfolio}
                    onChange={(e) =>
                      setFormData({ ...formData, portfolio: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="GitHub repo, deployed app, case study..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Необязательно, но повышает шансы на одобрение
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Дополнительная информация
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalInfo: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="Что-то ещё, что мы должны знать о вас или продукте?"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6 border-t-2 border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку →"}
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь с условиями размещения и
                обработкой данных
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
