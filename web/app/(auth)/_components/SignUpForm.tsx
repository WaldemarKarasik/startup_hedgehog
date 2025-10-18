"use client";
import Link from "next/link";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Rocket, Mail, Lock, User, UserCircle } from "lucide-react";

// + --- Imports for Form Validation ---
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient, SignUpError } from "@/src/lib/api-client";
import { HTTPException } from "hono/http-exception";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
// + -----------------------------------

// + --- 1. Define Validation Schema ---
const signUpSchema = z
  .object({
    firstName: z.string().min(2, "Имя должно быть не менее 2 символов"),
    lastName: z.string().min(2, "Фамилия должна быть не менее 2 символов"),
    email: z.string().email("Некорректный email адрес"),
    password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
    confirmPassword: z.string().min(1, "Подтверждение пароля обязательно"),
    terms: z.boolean().refine((value) => value === true, {
      message: "Вы должны принять условия",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    // + Проверка на совпадение паролей
    message: "Пароли не совпадают",
    path: ["confirmPassword"], // + Ошибка будет на поле confirmPassword
  });

// + --- 2. Create Type from Schema ---
type SignUpFormValues = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  // + --- 3. Initialize react-hook-form ---
  const {
    control,
    handleSubmit,
    register, // + Нам нужен 'register' для нативного чекбокса
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });
  const { mutate, error, isPending } = useMutation({
    // 'mutationFn' - это и есть ваш API-запрос
    mutationFn: async (data: SignUpFormValues) => {
      // Очищаем старую ошибку при *начале* нового запроса
      const { firstName, lastName, email, password } = data;
      const res = await apiClient.api.auth.signup.$post({
        json: { firstName, lastName, email, password },
      });
      const resData = await res.json();
      if (!resData.success) {
        throw new Error((resData as SignUpError).message);
      }
    },

    // 'onSuccess' - вызывается при 2xx ответе
    onSuccess: (data) => {
      // УСПЕХ:
      console.log("Успех!", data);
      // TODO: Показать toast
      // TODO: router.push("/sign-in");
    },

    // 'onError' - вызывается при 4xx/5xx/ошибке сети
    onError: async (error: SignUpError) => {
      // ОШИБКА:
      // Та же логика, что и раньше, но внутри 'onError'
    },
  });
  // + --- 4. Create Submit Handler ---
  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    // 1. Очищаем старые ошибки сервера при новой отправке
    mutate(data);
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
          {/* + --- 5. Hook up the form submit --- */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-7"
          >
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-20" />
                  <FloatLabel>
                    {/* + --- 6. Use <Controller> --- */}
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field, fieldState }) => (
                        <InputText
                          id={field.name}
                          {...field}
                          type="text"
                          className={`w-full pr-4 py-3 border-2 rounded-lg transition-all ${
                            fieldState.error
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200 p-invalid"
                              : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          }`}
                          placeholder="Имя"
                          style={{ paddingLeft: "3rem" }}
                        />
                      )}
                    />
                    <label
                      htmlFor="firstName"
                      className="text-gray-600 font-medium text-sm"
                      style={{ left: "3rem" }}
                    >
                      Имя
                    </label>
                  </FloatLabel>
                </div>
                {/* + --- 7. Display Error --- */}
                {errors.firstName && (
                  <small className="text-red-500 text-xs pt-1 pl-1">
                    {errors.firstName.message}
                  </small>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <div className="relative">
                  <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-20" />
                  <FloatLabel>
                    {/* + --- 6. Use <Controller> --- */}
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field, fieldState }) => (
                        <InputText
                          id={field.name}
                          {...field}
                          type="text"
                          className={`w-full pr-4 py-3 border-2 rounded-lg transition-all ${
                            fieldState.error
                              ? "border-red-500 focus:border-red-500 focus:ring-red-200 p-invalid"
                              : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                          }`}
                          placeholder="Фамилия"
                          style={{ paddingLeft: "3rem" }}
                        />
                      )}
                    />
                    <label
                      htmlFor="lastName"
                      className="text-gray-600 font-medium text-sm"
                      style={{ left: "3rem" }}
                    >
                      Фамилия
                    </label>
                  </FloatLabel>
                </div>
                {/* + --- 7. Display Error --- */}
                {errors.lastName && (
                  <small className="text-red-500 text-xs pt-1 pl-1">
                    {errors.lastName.message}
                  </small>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
                <FloatLabel>
                  {/* + --- 6. Use <Controller> --- */}
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                      <InputText
                        id={field.name}
                        {...field}
                        type="email"
                        className={`w-full pr-4 py-3 border-2 rounded-lg transition-all ${
                          fieldState.error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200 p-invalid"
                            : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                        }`}
                        placeholder="Email"
                        style={{ paddingLeft: "3.5rem" }}
                      />
                    )}
                  />
                  <label
                    htmlFor="email"
                    className="text-gray-600 font-medium"
                    style={{ left: "3.5rem" }}
                  >
                    Email
                  </label>
                </FloatLabel>
              </div>
              {/* + --- 7. Display Error --- */}
              {errors.email && (
                <small className="text-red-500 text-xs pt-1 pl-1">
                  {errors.email.message}
                </small>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <div className="relative w-full full-width-password">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
                <FloatLabel>
                  {/* + --- 6. Use <Controller> --- */}
                  <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Password
                        id={field.name}
                        {...field}
                        className="w-full"
                        inputClassName={`w-full pr-12 py-3 border-2 rounded-lg transition-all ${
                          fieldState.error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200 p-invalid"
                            : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
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
                    )}
                  />
                  <label
                    htmlFor="password"
                    className="text-gray-600 font-medium"
                    style={{ left: "3.5rem" }}
                  >
                    Пароль
                  </label>
                </FloatLabel>
              </div>
              {/* + --- 7. Display Error --- */}
              {errors.password && (
                <small className="text-red-500 text-xs pt-1 pl-1">
                  {errors.password.message}
                </small>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col">
              <div className="relative full-width-password">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-20" />
                <FloatLabel>
                  {/* + --- 6. Use <Controller> --- */}
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Password
                        id={field.name}
                        {...field}
                        className="w-full"
                        inputClassName={`w-full pr-12 py-3 border-2 rounded-lg transition-all ${
                          fieldState.error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-200 p-invalid"
                            : "border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                        }`}
                        inputStyle={{ paddingLeft: "3.5rem" }}
                        placeholder="Подтвердите пароль"
                        feedback={false}
                        toggleMask
                      />
                    )}
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="text-gray-600 font-medium"
                    style={{ left: "3.5rem" }}
                  >
                    Подтвердите пароль
                  </label>
                </FloatLabel>
              </div>
              {/* + --- 7. Display Error --- */}
              {errors.confirmPassword && (
                <small className="text-red-500 text-xs pt-1 pl-1">
                  {errors.confirmPassword.message}
                </small>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex flex-col">
              <div className="flex items-start gap-3 mt-2">
                {/* + --- 8. Use 'register' for native checkbox --- */}
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms")}
                  className={`mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-2 ${
                    errors.terms ? "ring-red-500" : "focus:ring-primary-200"
                  }`}
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
              {/* + --- 7. Display Error --- */}
              {errors.terms && (
                <small className="text-red-500 text-xs pt-1 pl-3">
                  {errors.terms.message}
                </small>
              )}
            </div>
            {/* + --- 4. Блок для отображения ошибки --- */}
            {error && (
              <div className="w-full p-3 text-sm text-center text-red-800 bg-red-100 border border-red-300 rounded-lg">
                {error.message}
              </div>
            )}
            {/* Submit Button */}
            <Button
              label={isSubmitting ? "Создание..." : "Создать аккаунт"}
              type="submit"
              disabled={isPending}
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-0 mt-2"
              loading={isPending}
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
