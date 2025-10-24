import {
  GetCatalog,
  GetCatalogSuccess,
  getCurrentUser,
  serverFetch,
} from "@/src/lib/api-client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserRoles } from "shared";
import { ProductsTable } from "./_сomponents/ProductsTable";

export default async function ProductApplications() {
  const cookieStore = await cookies();
  const user = await getCurrentUser(cookieStore);
  if (!user) {
    return redirect("/sign-in");
  }
  if (user.role !== UserRoles.ADMIN) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="max-w-md">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Доступ запрещен
          </h1>
          <p className="text-gray-600 mb-6">
            Эта страница доступна только администраторам.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Ваша роль:</strong>{" "}
              {user.role === "DEVELOPER" ? "Разработчик" : "Покупатель"}
            </p>
            <p className="text-sm text-yellow-800 mt-1">
              <strong>Требуется:</strong> Администратор
            </p>
          </div>
          <a
            href="/dashboard"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Вернуться в Dashboard
          </a>
        </div>
      </div>
    );
  }
  try {
    const productApplicatios = await serverFetch(
      "/api/product/list",
      cookieStore
    );
    const productApplicationsRes: GetCatalog = await productApplicatios.json();
    if (!productApplicationsRes.success) {
      throw new Error(productApplicationsRes.error);
    }
    return (
      <div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Продукты</h1>
          <p className="text-gray-600 mt-1">Управление всеми продуктами</p>
        </div>

        <ProductsTable products={productApplicationsRes.data} />
      </div>
    );
  } catch (err: any) {
    return <div className="text-red-500">{err.message}</div>;
  }
}
