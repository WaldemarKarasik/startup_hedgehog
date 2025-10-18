"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Rocket, Mail, Lock, User, UserCircle } from "lucide-react";

export const SignUpForm = () => {
  return (
    <div className="w-full max-w-md lg:max-w-2xl mx-auto">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 px-8 py-10 text-white">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Rocket className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center mb-2">
            Начните сейчас!
          </h1>
          <p className="text-primary-100 text-center text-sm">
            Создайте аккаунт и присоединяйтесь к StartupЁж
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          <form className="flex flex-col gap-5">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-20" />
                <FloatLabel>
                  <InputText
                    id="name"
                    type="text"
                    className="w-full pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                    placeholder="Имя"
                    style={{ paddingLeft: '3rem' }}
                  />
                  <label
                    htmlFor="name"
                    className="text-gray-600 font-medium text-sm"
                    style={{ left: '3rem' }}
                  >
                    Имя
                  </label>
                </FloatLabel>
              </div>

              {/* Last Name */}
              <div className="relative">
                <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-20" />
                <FloatLabel>
                  <InputText
                    id="last-name"
                    type="text"
                    className="w-full pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                    placeholder="Фамилия"
                    style={{ paddingLeft: '3rem' }}
                  />
                  <label
                    htmlFor="last-name"
                    className="text-gray-600 font-medium text-sm"
                    style={{ left: '3rem' }}
                  >
                    Фамилия
                  </label>
                </FloatLabel>
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel>
                <InputText
                  id="email"
                  type="email"
                  className="w-full pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                  placeholder="Email"
                  style={{ paddingLeft: '3.5rem' }}
                />
                <label
                  htmlFor="email"
                  className="text-gray-600 font-medium"
                  style={{ left: '3.5rem' }}
                >
                  Email
                </label>
              </FloatLabel>
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel>
                <Password
                  id="password"
                  className="w-full"
                  inputClassName="w-full pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                  inputStyle={{ paddingLeft: '3.5rem' }}
                  placeholder="Пароль"
                  feedback={true}
                  toggleMask
                  weakLabel="Слабый"
                  mediumLabel="Средний"
                  strongLabel="Сильный"
                  promptLabel="Введите пароль"
                />
                <label
                  htmlFor="password"
                  className="text-gray-600 font-medium"
                  style={{ left: '3.5rem' }}
                >
                  Пароль
                </label>
              </FloatLabel>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel>
                <Password
                  id="repeat-password"
                  className="w-full"
                  inputClassName="w-full pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                  inputStyle={{ paddingLeft: '3.5rem' }}
                  placeholder="Подтвердите пароль"
                  feedback={false}
                  toggleMask
                />
                <label
                  htmlFor="repeat-password"
                  className="text-gray-600 font-medium"
                  style={{ left: '3.5rem' }}
                >
                  Подтвердите пароль
                </label>
              </FloatLabel>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-200"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 leading-tight"
              >
                Я соглашаюсь с{" "}
                <Link
                  href="/terms"
                  className="text-primary-600 hover:underline font-medium"
                >
                  условиями использования
                </Link>{" "}
                и{" "}
                <Link
                  href="/privacy"
                  className="text-primary-600 hover:underline font-medium"
                >
                  политикой конфиденциальности
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              label="Создать аккаунт"
              type="submit"
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-0 mt-2"
            />
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">или</span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-3">Уже есть аккаунт?</p>
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center w-full py-3 px-4 border-2 border-primary-200 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
            >
              Войти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
