import ProjectCard from "@/src/landing/components/ProjectCard";
import { mockStartups } from "@/src/lib/mock-data";
import { Filter } from "lucide-react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { fetchCatalog } from "@/src/hooks/products";
import { ProductCard } from "./_components/ProductCard";

export default async function CatalogPage() {
  const activeStartups = mockStartups.filter((s) => s.status === "active");

  const catalog = await fetchCatalog()
    .then((catalog) => {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Каталог проектов
                </h1>
                <p className="text-gray-600">
                  Найдите готовое IT решение для запуска
                </p>
              </div>
              {/* Results */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Найдено проектов:{" "}
                  <span className="font-semibold text-gray-900">
                    {catalog.length}
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {catalog.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    })
    .catch((err) => {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Каталог проектов
                </h1>
                <p className="text-gray-600">
                  Найдите готовое IT решение для запуска
                </p>
              </div>
              {/* Results */}
              <div>Не удалось загрузить каталог </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    });
  return catalog;
  // return (
  //   <div className="min-h-screen flex flex-col">
  //     <Header />

  //     <main className="flex-1 bg-gray-50">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  //         {/* Header */}
  //         <div className="mb-8">
  //           <h1 className="text-3xl md:text-4xl font-bold mb-2">
  //             Каталог проектов
  //           </h1>
  //           <p className="text-gray-600">
  //             Найдите готовый стартап для запуска или инвестиций
  //           </p>
  //         </div>

  //         {/* Filters */}
  //         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
  //           <div className="flex items-center gap-2 mb-4">
  //             <Filter className="w-5 h-5 text-gray-600" />
  //             <h2 className="font-semibold">Фильтры</h2>
  //           </div>

  //           <div className="grid md:grid-cols-4 gap-4">
  //             <div>
  //               <label className="block text-sm font-medium text-gray-700 mb-2">
  //                 Категория
  //               </label>
  //               <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
  //                 <option>Все категории</option>
  //                 <option>Веб-приложения</option>
  //                 <option>Мобильные</option>
  //                 <option>SaaS</option>
  //                 <option>Telegram боты</option>
  //                 <option>Расширения</option>
  //               </select>
  //             </div>

  //             <div>
  //               <label className="block text-sm font-medium text-gray-700 mb-2">
  //                 Цена до
  //               </label>
  //               <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
  //                 <option>Любая</option>
  //                 <option>До 200 000 ₽</option>
  //                 <option>До 500 000 ₽</option>
  //                 <option>До 1 000 000 ₽</option>
  //                 <option>Более 1 000 000 ₽</option>
  //               </select>
  //             </div>

  //             <div>
  //               <label className="block text-sm font-medium text-gray-700 mb-2">
  //                 Revenue Share
  //               </label>
  //               <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
  //                 <option>Любой</option>
  //                 <option>До 30%</option>
  //                 <option>30-40%</option>
  //                 <option>40-50%</option>
  //                 <option>Более 50%</option>
  //               </select>
  //             </div>

  //             <div>
  //               <label className="block text-sm font-medium text-gray-700 mb-2">
  //                 Сортировка
  //               </label>
  //               <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
  //                 <option>Сначала новые</option>
  //                 <option>Сначала дешёвые</option>
  //                 <option>Сначала дорогие</option>
  //                 <option>По популярности</option>
  //               </select>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Results */}
  //         <div className="mb-6">
  //           <p className="text-gray-600">
  //             Найдено проектов:{" "}
  //             <span className="font-semibold text-gray-900">
  //               {activeStartups.length}
  //             </span>
  //           </p>
  //         </div>

  //         {/* Projects Grid */}
  //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {activeStartups.map((startup) => (
  //             <ProjectCard key={startup.id} startup={startup} />
  //           ))}
  //         </div>

  //         {/* Pagination */}
  //         <div className="mt-12 flex justify-center">
  //           <nav className="flex items-center gap-2">
  //             <button
  //               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  //               disabled
  //             >
  //               Назад
  //             </button>
  //             <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
  //               1
  //             </button>
  //             <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
  //               2
  //             </button>
  //             <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
  //               3
  //             </button>
  //             <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
  //               Далее
  //             </button>
  //           </nav>
  //         </div>
  //       </div>
  //     </main>

  //     <Footer />
  //   </div>
  // );
}
