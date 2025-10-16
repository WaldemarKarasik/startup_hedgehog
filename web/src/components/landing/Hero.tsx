"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-sm font-medium shadow-lg">
            <span className="animate-pulse mr-2">💎</span>
            Готовые IT-решения для вашего бизнеса с Revenue Share
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Добавьте{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              IT-инструмент
            </span>
            <br />к вашему бизнесу за неделю
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Купите готовое IT-решение, мы{" "}
            <span className="font-bold text-indigo-600">
              доработаем под вас
            </span>{" "}
            за 5-7 дней.
            <br />
            От <span className="font-bold text-indigo-600">300 тыс ₽</span>{" "}
            вместо миллионов на разработку с нуля.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/catalog"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <span className="relative z-10">Смотреть каталог проектов</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/add-project"
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-indigo-200 hover:border-indigo-300 transform hover:-translate-y-1 transition-all duration-200"
            >
              Разместить проект
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Готовых проектов</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                3-6 мес
              </div>
              <div className="text-gray-600 font-medium">Окупаемость</div>
            </div>
            <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">
                15-20%
              </div>
              <div className="text-gray-600 font-medium">Revenue Share</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
