"use client";

import Link from "next/link";
import { FileText, Shield } from "lucide-react";

export default function DeveloperSignInInfo() {
  return (
    <div className="space-y-6">
      {/* Main message */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
        <div className="flex items-start gap-4">
          <div className="text-4xl">🔐</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Для разработчиков: специальный процесс регистрации
            </h3>
            <p className="text-gray-700">
              Мы предпочитаем работать с проверенными разработчиками. Ваш
              аккаунт создаётся вручную после проверки ваших данных и проектов.
            </p>
          </div>
        </div>
      </div>

      {/* Process steps */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 text-lg">
          Процесс регистрации:
        </h4>

        <div className="space-y-3">
          <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100">
                <span className="text-lg">1</span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900">
                Заполните форму заявки
              </h5>
              <p className="text-sm text-gray-600 mt-1">
                Расскажите о себе и своих проектах. Загрузите портфолио,
                примеры кода, метрики.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100">
                <span className="text-lg">2</span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900">Проверка данных</h5>
              <p className="text-sm text-gray-600 mt-1">
                Наша команда проверит портфолио, качество кода и вашу историю.
                Обычно это занимает 3-5 дней.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100">
                <span className="text-lg">3</span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900">
                Одобрение и создание аккаунта
              </h5>
              <p className="text-sm text-gray-600 mt-1">
                После одобрения мы создаём для вас аккаунт и вы можете начать
                размещать решения.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why this process */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600" />
          Почему так?
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>
              Мы убеждаемся в качестве кода перед размещением в каталоге
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>
              Проверяем, что решение уже работает и протестировано (не просто
              идея)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>
              Строим репутацию платформы, исключая мошеннические проекты
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Это защищает вас и покупателей</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Готовы начать?</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/for-developers/apply"
            className="px-6 py-4 bg-indigo-600 text-white rounded-lg font-semibold text-center hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            Подать заявку
          </Link>

          <Link
            href="/"
            className="px-6 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold text-center hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
          >
            На главную
          </Link>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Заявка на{" "}
          <Link href="/for-developers/apply" className="hover:underline">
            /for-developers/apply
          </Link>
        </p>
      </div>

      {/* FAQ */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Часто спрашивают:</h4>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium text-gray-900">
              Сколько ждать ответ на заявку?
            </p>
            <p className="text-gray-600 mt-1">
              Обычно 3-5 дней. В пиковые периоды может быть дольше.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Что если мне откажут?</p>
            <p className="text-gray-600 mt-1">
              Мы напишем, почему. Вы сможете улучшить и подать заявку снова.
            </p>
          </div>
          <div>
            <p className="font-medium text-gray-900">
              Нужно быть только из России?
            </p>
            <p className="text-gray-600 mt-1">
              На этапе MVP фокусимся на русском рынке. Но свяжитесь с нами —
              может быть исключение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
