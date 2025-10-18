"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Rocket, Mail, Lock, User, UserCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormData } from "@/src/lib/validations/auth";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    console.log("Sign up data:", data);
    // TODO: Implement actual sign up logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

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
            Создайте аккаунт и присоединяйтесь к StartAppЁж
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-20" />
                <FloatLabel>
                  <InputText
                    id="firstName"
                    type="text"
                    {...register("firstName")}
                    className={`w-full pr-4 py-3 border-2 rounded-lg focus:ring-2 transition-all ${
                      errors.firstName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:border-primary-500 focus:ring-primary-200"
                    }`}
                    placeholder="Имя"
                    style={{ paddingLeft: "3rem" }}
                  />
                  <label
                    htmlFor="firstName"
                    className="text-gray-600 font-medium text-sm"
                    style={{ left: "3rem" }}
                  >
                    Имя
                  </label>
                </FloatLabel>
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="relative">
                <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-20" />
                <FloatLabel>
                  <InputText
                    id="lastName"
                    type="text"
                    {...register("lastName")}
                    className={`w-full pr-4 py-3 border-2 rounded-lg focus:ring-2 transition-all ${
                      errors.lastName
                        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                        : "border-gray-200 focus:border-primary-500 focus:ring-primary-200"
                    }`}
                    placeholder="Фамилия"
                    style={{ paddingLeft: "3rem" }}
                  />
                  <label
                    htmlFor="lastName"
                    className="text-gray-600 font-medium text-sm"
                    style={{ left: "3rem" }}
                  >
                    Фамилия
                  </label>
                </FloatLabel>
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel>
                <InputText
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`w-full pr-4 py-3 border-2 rounded-lg focus:ring-2 transition-all ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-primary-500 focus:ring-primary-200"
                  }`}
                  placeholder="Email"
                  style={{ paddingLeft: "3.5rem" }}
                />
                <label
                  htmlFor="email"
                  className="text-gray-600 font-medium"
                  style={{ left: "3.5rem" }}
                >
                  Email
                </label>
              </FloatLabel>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative w-full full-width-password">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel>
                <Password
                  id="password"
                  {...register("password")}
                  className="w-full"
                  inputClassName={`w-full pr-12 py-3 border-2 rounded-lg focus:ring-2 transition-all ${
                    errors.password
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-primary-500 focus:ring-primary-200"
                  }`}
                  inputStyle={{ paddingLeft: "3.5rem" }}
                  style={{ width: "100%" }}
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
                  style={{ left: "3.5rem" }}
                >
                  Пароль
                </label>
              </FloatLabel>
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative full-width-password">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
              <FloatLabel>
                <Password
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  className="w-full"
                  inputClassName={`w-full pr-12 py-3 border-2 rounded-lg focus:ring-2 transition-all ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:border-primary-500 focus:ring-primary-200"
                  }`}
                  inputStyle={{ paddingLeft: "3.5rem" }}
                  placeholder="Подтвердите пароль"
                  feedback={false}
                  toggleMask
                />
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-600 font-medium"
                  style={{ left: "3.5rem" }}
                >
                  Подтвердите пароль
                </label>
              </FloatLabel>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                id="acceptTerms"
                {...register("acceptTerms")}
                className={`mt-1 w-4 h-4 text-primary-600 rounded focus:ring-2 ${
                  errors.acceptTerms
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-primary-200"
                }`}
              />
              <label
                htmlFor="acceptTerms"
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
            {errors.acceptTerms && (
              <p className="text-sm text-red-600 -mt-4">
                {errors.acceptTerms.message}
              </p>
            )}

            {/* Submit Button */}
            <Button
              label={isSubmitting ? "Создание..." : "Создать аккаунт"}
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
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
