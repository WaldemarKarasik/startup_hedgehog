"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Rocket, Mail, Lock } from "lucide-react";

export const SignInForm = () => {
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
            С возвращением!
          </h1>
          <p className="text-primary-100 text-center text-sm">
            Войдите в свой аккаунт StartupЁж
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          <form className="flex flex-col gap-6">
            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel>
                <InputText
                  id="email"
                  type="email"
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
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
            <div className="relative w-full full-width-password">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel className="w-full">
                <Password
                  id="password"
                  className="w-full"
                  style={{ width: '100%' }}
                  inputClassName="w-full pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                  inputStyle={{ paddingLeft: '3.5rem', width: '100%' }}
                  placeholder="Пароль"
                  feedback={false}
                  toggleMask
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

            {/* Forgot Password Link */}
            <div className="flex justify-end -mt-2">
              <Link
                href="/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Забыли пароль?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              label="Войти"
              type="submit"
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-0"
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

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-600 mb-3">Еще нет аккаунта?</p>
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center w-full py-3 px-4 border-2 border-primary-200 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
            >
              Создать аккаунт
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Входя в систему, вы соглашаетесь с{" "}
        <Link href="/terms" className="text-primary-600 hover:underline">
          условиями использования
        </Link>{" "}
        и{" "}
        <Link href="/privacy" className="text-primary-600 hover:underline">
          политикой конфиденциальности
        </Link>
      </p>
    </div>
  );
};
