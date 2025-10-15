import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  Shield,
  TrendingUp,
  Zap,
  Search,
  DollarSign,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { mockStartups } from "@/lib/mock-data";
export default function Home() {
  const featuredStartups = mockStartups
    .filter((s) => s.status === "active")
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Биржа стартапов с{" "}
                <span className="text-primary-200">Revenue Share</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Найдите готовый стартап или продайте свой проект. Долгосрочное
                партнёрство вместо разовой сделки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/catalog"
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Смотреть проекты
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/calculator"
                  className="px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-900 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Калькулятор Revenue Share
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  127
                </div>
                <div className="text-gray-600">Активных проектов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  ₽5.2М
                </div>
                <div className="text-gray-600">Средняя сделка</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  42
                </div>
                <div className="text-gray-600">Успешных сделок</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  35%
                </div>
                <div className="text-gray-600">Средний Revenue Share</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Почему StartupЁж?
              </h2>
              <p className="text-xl text-gray-600">
                Уникальная платформа для долгосрочного партнёрства
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Revenue Share модель
                </h3>
                <p className="text-gray-600">
                  Вместо разовой продажи — долгосрочное партнёрство с делением
                  прибыли. Обе стороны заинтересованы в успехе проекта.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Юридическая защита
                </h3>
                <p className="text-gray-600">
                  Готовые договоры, электронная подпись и арбитражная система.
                  Ваши интересы защищены на каждом этапе.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Прозрачная аналитика
                </h3>
                <p className="text-gray-600">
                  Реал-тайм дашборд с доходами, автоматическое распределение
                  выплат и детальная статистика для обеих сторон.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Как это работает?
              </h2>
              <p className="text-xl text-gray-600">
                Простой процесс от поиска до партнёрства
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-2">Найдите проект</h3>
                <p className="text-gray-600 text-sm">
                  Просмотрите каталог готовых стартапов с подробным описанием и
                  демо
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-2">Рассчитайте условия</h3>
                <p className="text-gray-600 text-sm">
                  Используйте калькулятор для расчёта Revenue Share и
                  окупаемости
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-2">Заключите сделку</h3>
                <p className="text-gray-600 text-sm">
                  Подпишите договор онлайн и получите доступ ко всем материалам
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-2">Развивайте вместе</h3>
                <p className="text-gray-600 text-sm">
                  Получайте прибыль и развивайте проект в партнёрстве с
                  разработчиком
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Популярные проекты
                </h2>
                <p className="text-gray-600">
                  Готовые стартапы с доказанной моделью монетизации
                </p>
              </div>
              <Link
                href="/catalog"
                className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
              >
                Все проекты
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredStartups.map((startup) => (
                <ProjectCard key={startup.id} startup={startup} />
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold"
              >
                Все проекты
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы найти свой стартап?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Присоединяйтесь к сообществу разработчиков и предпринимателей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalog"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Смотреть проекты
              </Link>
              <Link
                href="/add-project"
                className="px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white/20"
              >
                Добавить свой проект
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
