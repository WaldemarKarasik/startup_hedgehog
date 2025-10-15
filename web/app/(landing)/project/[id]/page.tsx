import { notFound } from "next/navigation";
import Link from "next/link";

import {
  Eye,
  Heart,
  TrendingUp,
  ExternalLink,
  CheckCircle,
  Code,
  Calendar,
  Users,
} from "lucide-react";
import Header from "@/src/landing/components/Header";
import { mockStartups } from "@/src/lib/mock-data";
import Footer from "@/src/landing/components/Footer";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const startup = mockStartups.find((s) => s.id === params.id);
  if (!startup) {
    notFound();
  }

  const categoryLabels = {
    web: "Веб-приложение",
    mobile: "Мобильное приложение",
    saas: "SaaS платформа",
    bot: "Telegram бот",
    extension: "Расширение браузера",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              Главная
            </Link>
            {" / "}
            <Link href="/catalog" className="hover:text-primary-600">
              Каталог
            </Link>
            {" / "}
            <span className="text-gray-900">{startup.title}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-primary-400 to-primary-600 relative flex items-center justify-center">
                  <Code className="w-32 h-32 text-white opacity-50" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                      {categoryLabels[startup.category]}
                    </span>
                    {startup.status === "sold" && (
                      <span className="px-3 py-1 bg-gray-900/90 text-white backdrop-blur-sm rounded-full text-sm font-medium">
                        Продано
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h1 className="text-3xl font-bold">{startup.title}</h1>
                    <div className="flex gap-2">
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">
                    {startup.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm text-gray-600 pb-6 border-b">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{startup.views} просмотров</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>{startup.likes} в избранном</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        Опубликовано{" "}
                        {new Date(startup.createdAt).toLocaleDateString(
                          "ru-RU"
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Metrics */}
                  {(startup.monthlyRevenue || startup.users) && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {startup.monthlyRevenue && (
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 text-green-700 mb-1">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Месячная выручка
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-green-900">
                            {(startup.monthlyRevenue / 1000).toFixed(0)} 000 ₽
                          </div>
                        </div>
                      )}
                      {startup.users !== undefined && startup.users > 0 && (
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 text-blue-700 mb-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Активных пользователей
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-blue-900">
                            {startup.users}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Реализованные функции
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {startup.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Технологический стек
                </h2>
                <div className="flex flex-wrap gap-3">
                  {startup.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo Link */}
              {startup.demoUrl && (
                <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-primary-900 mb-1">
                        Попробуйте демо
                      </h3>
                      <p className="text-sm text-primary-700">
                        Посмотрите как работает проект
                      </p>
                    </div>
                    <a
                      href={startup.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
                    >
                      Открыть демо
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-1">Цена проекта</div>
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    {(startup.price / 1000).toFixed(0)} 000 ₽
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-sm text-primary-700 mb-1">
                      Revenue Share для разработчика
                    </div>
                    <div className="text-3xl font-bold text-primary-600">
                      {startup.revenueShare}%
                    </div>
                    <div className="text-xs text-primary-600 mt-2">
                      от ежемесячной прибыли проекта
                    </div>
                  </div>
                </div>

                {startup.status === "active" ? (
                  <>
                    <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors mb-3">
                      Связаться с разработчиком
                    </button>
                    <Link
                      href="/calculator"
                      className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors block text-center"
                    >
                      Рассчитать выгоду
                    </Link>
                  </>
                ) : (
                  <div className="text-center py-4 text-gray-600">
                    Этот проект уже продан
                  </div>
                )}
              </div>

              {/* Developer Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold mb-4">Разработчик</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold text-lg">
                    {startup.developer.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {startup.developer.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      ⭐ {startup.developer.rating} •{" "}
                      {startup.developer.projectsCount} проектов
                    </div>
                  </div>
                </div>
                {startup.developer.bio && (
                  <p className="text-sm text-gray-600 mb-4">
                    {startup.developer.bio}
                  </p>
                )}
                <Link
                  href={`/developer/${startup.developer.id}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Посмотреть профиль →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
