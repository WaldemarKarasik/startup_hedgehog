"use client";

import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  ArrowRight,
  Star,
} from "lucide-react";
import { useAuthStore } from "@/src/stores/auth.store";
import Link from "next/link";

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
  color: string;
}

export default function Dashboard() {
  const { user } = useAuthStore();

  // Статистические карточки
  const stats: StatCard[] = [
    {
      title: "Общий доход",
      value: "₽0",
      change: "+0%",
      trend: "up",
      icon: <DollarSign size={24} />,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Активные сделки",
      value: "0",
      change: "0 новых",
      trend: "up",
      icon: <ShoppingBag size={24} />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Продуктов",
      value: "0",
      change: "0 активных",
      trend: "up",
      icon: <Package size={24} />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Клиентов",
      value: "0",
      change: "+0 за месяц",
      trend: "up",
      icon: <Users size={24} />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  // Данные для графика дохода
  const revenueChartData = {
    labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
    datasets: [
      {
        label: "Доход",
        data: [0, 0, 0, 0, 0, 0],
        fill: true,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const revenueChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Данные для графика продуктов
  const productsChartData = {
    labels: ["SaaS", "Mobile Apps", "Web Apps", "APIs", "Другое"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          "#3b82f6",
          "#8b5cf6",
          "#ec4899",
          "#f59e0b",
          "#10b981",
        ],
      },
    ],
  };

  const productsChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  // Недавние продукты (мок данные)
  const recentProducts = [
    {
      name: "CRM система",
      category: "SaaS",
      price: "₽150,000",
      rating: 4.8,
    },
    {
      name: "E-commerce платформа",
      category: "Web App",
      price: "₽200,000",
      rating: 4.9,
    },
    {
      name: "Мобильное приложение",
      category: "Mobile",
      price: "₽120,000",
      rating: 4.7,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Добро пожаловать, {user?.firstName}! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Вот обзор вашей активности на платформе
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-4`}
            >
              {stat.icon}
            </div>

            {/* Title */}
            <p className="text-sm text-gray-600 font-medium mb-1">
              {stat.title}
            </p>

            {/* Value */}
            <p className="text-2xl font-bold text-gray-900 mb-2">
              {stat.value}
            </p>

            {/* Trend */}
            <div className="flex items-center gap-1">
              {stat.trend === "up" ? (
                <TrendingUp size={16} className="text-green-600" />
              ) : (
                <TrendingDown size={16} className="text-red-600" />
              )}
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <Card className="shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Динамика дохода
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Последние 6 месяцев
                </p>
              </div>
              <Button
                label="Подробнее"
                icon="pi pi-arrow-right"
                iconPos="right"
                text
                className="text-primary-600"
              />
            </div>
            <div style={{ height: "300px" }}>
              <Chart
                type="line"
                data={revenueChartData}
                options={revenueChartOptions}
                style={{ height: "100%" }}
              />
            </div>
          </Card>
        </div>

        {/* Products Distribution */}
        <div>
          <Card className="shadow-sm border border-gray-100">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Категории продуктов
              </h3>
              <p className="text-sm text-gray-500 mt-1">Распределение</p>
            </div>
            <div style={{ height: "300px" }}>
              <Chart
                type="doughnut"
                data={productsChartData}
                options={productsChartOptions}
                style={{ height: "100%" }}
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Products & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Products */}
        <div className="lg:col-span-2">
          <Card className="shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Популярные продукты
              </h3>
              <Link
                href="/dashboard/catalog"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Смотреть все
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {recentProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all cursor-pointer"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      {product.price}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card className="shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Быстрые действия
            </h3>
            <div className="space-y-3">
              {user?.role === "DEVELOPER" && (
                <Button
                  label="Добавить продукт"
                  icon="pi pi-plus"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 border-0 hover:from-primary-600 hover:to-primary-700"
                  onClick={() => {}}
                />
              )}
              <Button
                label="Просмотреть каталог"
                icon="pi pi-shopping-bag"
                className="w-full"
                outlined
              />
              <Button
                label="Мои сделки"
                icon="pi pi-briefcase"
                className="w-full"
                outlined
              />
              <Button
                label="Настройки профиля"
                icon="pi pi-cog"
                className="w-full"
                outlined
              />
            </div>

            {/* Help Card */}
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">
                Нужна помощь?
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Ознакомьтесь с нашей документацией или свяжитесь с поддержкой
              </p>
              <Button
                label="Связаться"
                icon="pi pi-question-circle"
                className="w-full"
                size="small"
                outlined
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
