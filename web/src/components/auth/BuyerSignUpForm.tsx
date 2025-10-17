"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, Phone } from "lucide-react";

export default function BuyerSignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Валидация
    if (!formData.firstName.trim()) {
      setError("Введите имя");
      return;
    }
    if (!formData.lastName.trim()) {
      setError("Введите фамилию");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Введите корректный email");
      return;
    }
    if (formData.password.length < 8) {
      setError("Пароль должен быть минимум 8 символов");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }
    if (!formData.agreeToTerms) {
      setError("Вы должны согласиться с условиями использования");
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement API call to create buyer account
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "BUYER",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при регистрации");
      }

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Произошла ошибка при регистрации"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Регистрация успешна!
        </h3>
        <p className="text-gray-600 mb-6">
          На ваш email отправлена ссылка для подтверждения. Пожалуйста,
          проверьте почту.
        </p>
        <p className="text-sm text-gray-500">
          Уже есть аккаунт?{" "}
          <Link href="/sign-in" className="text-indigo-600 hover:underline">
            Войти
          </Link>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Имя
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Иван"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Фамилия
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Иванов"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ivan@example.com"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Телефон (опционально)
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 123-45-67"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Пароль (минимум 8 символов)
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Подтверждение пароля
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="w-4 h-4 rounded border-gray-300"
        />
        <span className="text-gray-700">
          Я согласен с{" "}
          <Link href="/terms" className="text-indigo-600 hover:underline">
            условиями использования
          </Link>{" "}
          и{" "}
          <Link href="/privacy" className="text-indigo-600 hover:underline">
            политикой конфиденциальности
          </Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Регистрация..." : "Зарегистрироваться"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Уже есть аккаунт?{" "}
        <button
          type="button"
          onClick={() => {
            /* TODO: Switch to sign in tab */
          }}
          className="text-indigo-600 hover:underline font-semibold"
        >
          Войти
        </button>
      </p>
    </form>
  );
}
