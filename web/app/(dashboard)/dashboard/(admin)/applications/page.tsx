import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Server Component - проверка роли через API вызов к backend
 * JWT_SECRET остается только в server, не дублируется
 * 
 * ВАЖНО: В Server Components нельзя использовать apiClient с credentials: "include"
 * Нужно использовать обычный fetch с Cookie header
 */
async function checkAdminAccess() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/sign-in");
  }

  // API вызов к backend для проверки роли
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5173";

  try {
    const response = await fetch(`${API_URL}/api/auth/me`, {
      method: "GET",
      headers: {
        Cookie: `token=${token.value}`,
      },
      cache: "no-store", // Всегда fresh data
    });

    if (!response.ok) {
      console.error("[APPLICATIONS_PAGE] API response not ok:", response.status);
      redirect("/sign-in");
    }

    const data = await response.json();
    
    if (!data.success || !data.user) {
      console.error("[APPLICATIONS_PAGE] Invalid data:", data);
      redirect("/sign-in");
    }

    // Проверка роли
    if (data.user.role !== "ADMIN") {
      return { hasAccess: false, user: data.user };
    }

    return { hasAccess: true, user: data.user };
  } catch (error) {
    console.error("[APPLICATIONS_PAGE] Failed to check access:", error);
    redirect("/sign-in");
  }
}

export default async function DeveloperApplicationsPage() {
  const { hasAccess, user } = await checkAdminAccess();

  // Если не админ - показываем Access Denied
  if (!hasAccess) {
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

  // Админ - показываем страницу
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Заявки разработчиков
        </h1>
        <p className="text-gray-600 mt-1">
          Управление заявками на регистрацию разработчиков
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-600">
          Здесь будет список заявок разработчиков...
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Добро пожаловать, администратор {user.firstName}!
        </p>
      </div>
    </div>
  );
}
