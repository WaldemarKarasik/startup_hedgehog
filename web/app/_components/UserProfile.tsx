"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/src/lib/api-client";

/**
 * Пример Client Component который правильно вызывает защищённый endpoint
 * 
 * ✅ "use client" - выполняется в браузере, есть доступ к cookies
 * ✅ useQuery - для кеширования и loading states
 * ✅ Вызов делается из браузера → credentials: 'include' работает
 */
export function UserProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const response = await apiClient.api.auth.me.$get();
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      return response.json();
    },
    // Опционально: retry, staleTime, etc.
    retry: false,
  });

  if (isLoading) {
    return <div>Загрузка профиля...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (!data || !data.success) {
    return <div>Не авторизован</div>;
  }

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Email: {data.user.email}</p>
      <p>ID: {data.user.userId}</p>
      <p>Роль: {data.user.role}</p>
    </div>
  );
}
