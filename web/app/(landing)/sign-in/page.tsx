"use client";

import { useState } from "react";
import Link from "next/link";
import AuthTypeToggle, { AuthType } from "@/src/components/auth/AuthTypeToggle";
import BuyerSignUpForm from "@/src/components/auth/BuyerSignUpForm";
import DeveloperSignInInfo from "@/src/components/auth/DeveloperSignInInfo";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const [authType, setAuthType] = useState<AuthType>("buyer");
  const [showSignUp, setShowSignUp] = useState(true);
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const [signInError, setSignInError] = useState<string | null>(null);

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignInError(null);

    if (!signInData.email || !signInData.password) {
      setSignInError("Заполните все поля");
      return;
    }

    setIsLoadingSignIn(true);

    try {
      // TODO: Implement API call for sign in
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signInData),
      });

      if (!response.ok) {
        throw new Error("Неверный email или пароль");
      }

      // TODO: Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      setSignInError(
        err instanceof Error ? err.message : "Ошибка при входе"
      );
    } finally {
      setIsLoadingSignIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
              <span>🦔</span>
              StartupЁж
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Войти в StartupЁж
          </h1>
          <p className="text-gray-600">
            Готовые IT-решения для вашего бизнеса
          </p>
        </div>

        {/* Auth Type Toggle */}
        <AuthTypeToggle value={authType} onChange={setAuthType} />

        {/* Content */}
        {authType === "buyer" ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Tab switcher */}
            <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setShowSignUp(false)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  !showSignUp
                    ? "bg-white text-indigo-600 shadow"
                    : "text-gray-600"
                }`}
              >
                Вход
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  showSignUp
                    ? "bg-white text-indigo-600 shadow"
                    : "text-gray-600"
                }`}
              >
                Регистрация
              </button>
            </div>

            {/* Sign In Form */}
            {!showSignUp && (
              <form onSubmit={handleSignInSubmit} className="space-y-4">
                {signInError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {signInError}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={signInData.email}
                      onChange={handleSignInChange}
                      placeholder="ivan@example.com"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Пароль
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={signInData.password}
                      onChange={handleSignInChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-indigo-600 hover:underline"
                  >
                    Забыли пароль?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoadingSignIn}
                  className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoadingSignIn ? "Вход..." : "Войти"}
                  {!isLoadingSignIn && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}

            {/* Sign Up Form */}
            {showSignUp && <BuyerSignUpForm />}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <DeveloperSignInInfo />
          </div>
        )}

        {/* Footer links */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Нужна помощь?{" "}
            <Link href="/support" className="text-indigo-600 hover:underline">
              Контакты
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
