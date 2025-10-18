"use client";

import { useState } from "react";
import { Calculator, Code2, Briefcase } from "lucide-react";
import BusinessCalculator from "@/app/(landing)/_components/BusinessCalculator";
import DeveloperCalculator from "@/app/(landing)/_components/DeveloperCalculator";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

type CalculatorType = "developer" | "business";

export default function UnifiedCalculatorPage() {
  const [activeTab, setActiveTab] = useState<CalculatorType>("developer");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl mb-4 shadow-lg">
              <Calculator className="w-10 h-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Калькулятор доходности
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Рассчитайте доход или экономию с моделью Revenue Share
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveTab("developer")}
                  className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                    activeTab === "developer"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Code2 className="w-6 h-6" />
                  <span>Для разработчиков</span>
                </button>
                <button
                  onClick={() => setActiveTab("business")}
                  className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                    activeTab === "business"
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Briefcase className="w-6 h-6" />
                  <span>Для бизнеса</span>
                </button>
              </div>
            </div>

            {/* Tab Description */}
            <div className="mt-6 text-center">
              {activeTab === "developer" ? (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                  <p className="text-gray-700">
                    <strong className="text-indigo-900">
                      Для разработчиков:
                    </strong>{" "}
                    Рассчитайте свой доход от продажи готового IT-решения с
                    Revenue Share
                  </p>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <p className="text-gray-700">
                    <strong className="text-green-900">Для бизнеса:</strong>{" "}
                    Рассчитайте экономию от покупки готового решения вместо
                    разработки с нуля
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Calculator Content */}
          <div className="transition-all duration-300">
            {activeTab === "developer" ? (
              <DeveloperCalculator />
            ) : (
              <BusinessCalculator />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
