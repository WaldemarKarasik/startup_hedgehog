"use client";

import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Link from "next/link";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import { DeveloperApplicationForm, developerApplicationSchema } from "shared";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient } from "@/src/lib/api-client";
import { revalidate } from "@/src/lib/revalidate";
import { REVALIDATE_TYPES } from "@/src/types";
import { useQueryClient } from "@tanstack/react-query";

const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p className="text-red-600 mt-1">{message}</p>;
};

export default function Apply() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors }, // 'errors' теперь будут приходить от Zod
  } = useForm<DeveloperApplicationForm>({
    // RHF (zod) 3: Подключаем Zod как резолвер
    resolver: zodResolver(developerApplicationSchema),
    // RHF (zod) 4: Обновляем defaultValues (убираем 'name' и 'email')
    defaultValues: {
      telegram: "",
      productName: "",
      productDescription: "",
      customizationPrice: 300000,
      revenueSharePercent: 10,
      githubUrl: "",
      demoUrl: "",
      hasUsers: "no",
      userCount: "",
      customizationReady: "yes",
      targetBusinesses: "",
      portfolio: "",
      videoUrl: "",
      additionalInfo: "",
    },
  });

  const hasUsersValue = watch("hasUsers");
  const revenueShareValue = watch("revenueSharePercent");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  // Эта функция остается БЕЗ ИЗМЕНЕНИЙ.
  // RHF + Zod гарантируют, что 'data' будет
  // передана сюда ТОЛЬКО после успешной валидации.
  const onSubmit: SubmitHandler<DeveloperApplicationForm> = async (data) => {
    setError(null);
    try {
      const response = await apiClient.api.developerApplication.create.$post({
        json: data,
      });
      const resData = await response.json();
      if (!resData.success) {
        return setError(resData.error);
      }
      // ... остальная логика ...
      setSubmitted(true);
      await revalidate({
        type: REVALIDATE_TYPES.TAG,
        tag: "developer-applications",
      });
      queryClient.invalidateQueries({ queryKey: ["developer-applications"] });
    } catch (err) {
      // ...
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
          {/* ... (Header и Important Notice без изменений) ... */}

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
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
                  {/* RHF (zod) 5: Убираем всю встроенную валидацию */}
                  <input
                    type="text"
                    {...register("telegram")} // 👈 Чисто
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="@username"
                  />
                  {/* Ошибка будет показана здесь */}
                  <FormError message={errors.telegram?.message} />
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
                    {...register("productName")} // 👈 Убираем
                    // { required: ... }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="CalorieTrackerBot"
                  />
                  {/* Zod передаст ошибку сюда */}
                  <FormError message={errors.productName?.message} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Описание продукта <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("productDescription")} // 👈 Чисто
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="Telegram-бот для трекинга калорий..."
                  />
                  <FormError message={errors.productDescription?.message} />
                  {/* ... */}
                </div>
                {/* Customization price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Стоимость кастомизации
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="customizationPrice"
                    control={control}
                    // RHF (zod) 6: Убираем 'rules' из Controller
                    render={({ field }) => (
                      <div className="flex items-center gap-4 text-3xl font-bold text-indigo-600">
                        <input
                          type="range"
                          min="300000"
                          max="450000"
                          step="1"
                          value={field.value}
                          onChange={(e) =>
                            // RHF (zod) 7: Важно! Zod ожидает 'number'.
                            // Мы должны явно преобразовать тип.
                            field.onChange(Number(e.target.value))
                          }
                          className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <input
                          className="text-right"
                          type="number"
                          size={5}
                          value={field.value}
                          min={300000}
                          max={450000}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                        <span>₽</span>
                      </div>
                    )}
                  />
                  <FormError message={errors.customizationPrice?.message} />
                </div>
                {/* Revenue Share  */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Процент Revenue Share{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="revenueSharePercent"
                    control={control}
                    // 'rules' также убираем
                    render={({ field }) => (
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="5"
                          max="20"
                          step="1"
                          value={field.value}
                          // Убедимся, что передаем number
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          className="flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <div className="text-3xl font-bold text-indigo-600 min-w-[80px] text-center">
                          {field.value}%
                        </div>
                      </div>
                    )}
                  />
                  <FormError message={errors.revenueSharePercent?.message} />

                  {/* ... (блок с объяснением процентов) ... */}

                  <p className="text-sm text-gray-500 mt-2">
                    Например: клиент зарабатывает 300К/мес → вам{" "}
                    {Math.round((300 * (revenueShareValue || 10)) / 100)}
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
                    {...register("githubUrl")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="https://github.com/username/project"
                  />
                  {/* Zod покажет ошибку, если это не URL */}
                  <FormError message={errors.githubUrl?.message} />
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
                    {...register("demoUrl")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="https://t.me/your_bot или https://demo.yourapp.com"
                  />
                  <FormError message={errors.demoUrl?.message} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Видео-презентация продукта (2-3 мин){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    {...register("videoUrl")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="https://youtube.com/watch?v=... или Loom"
                  />
                  <FormError message={errors.videoUrl?.message} />
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
                    {...register("hasUsers")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, есть платные пользователи</option>
                    <option value="demo">Да, есть demo users</option>
                    <option value="no">Нет, только личное использование</option>
                  </select>
                  <FormError message={errors.hasUsers?.message} />
                </div>

                {hasUsersValue === "yes" && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Сколько пользователей?
                    </label>
                    <input
                      type="text"
                      {...register("userCount")}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                      placeholder="Примерно 50-100 активных пользователей"
                    />
                    {/* Ошибка для условного поля */}
                    <FormError message={errors.userCount?.message} />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Готовы ли кастомизировать продукт под клиентов?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("customizationReady")}
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
                  <FormError message={errors.customizationReady?.message} />
                  <p className="text-sm text-gray-500 mt-2">
                    Кастомизация = интеграции, брендинг...
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
                    rows={4}
                    {...register("targetBusinesses")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="1. Владельцы Telegram-каналов о ЗОЖ/фитнесе..."
                  />
                  <FormError message={errors.targetBusinesses?.message} />
                  <p className="text-sm text-gray-500 mt-2">
                    Опишите 1-2 конкретных типа бизнесов...
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
                    {...register("portfolio")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="GitHub repo, deployed app, case study..."
                  />
                  <FormError message={errors.portfolio?.message} />
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
                    {...register("additionalInfo")}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-colors"
                    placeholder="Что-то ещё, что мы должны знать...?"
                  />
                  <FormError message={errors.additionalInfo?.message} />
                </div>
              </div>
            </div>
            {error && (
              // ... (Error Display без изменений)
              <FormError message={error} />
            )}
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
                Нажимая кнопку, вы соглашаетесь с условиями...
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
