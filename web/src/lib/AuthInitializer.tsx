"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient, GetMeSuccess } from "@/src/lib/api-client";
import { useAuthStore } from "@/src/stores/auth.store";
import { useEffect } from "react";

export const AuthInitializer = () => {
  // Получаем функции из нашего хранилища
  const { setUser, clearUser, status } = useAuthStore();

  // Запрашиваем /api/users/me.
  // 'queryKey: ["me"]' - уникальный ключ
  const { data, error, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      // Делаем запрос.
      // Браузер АВТОМАТИЧЕСКИ отправит HttpOnly cookie
      const res = await apiClient.api.auth.me.$get();
      return await res.json();
    },
    retry: false, // Не пытаться повторить при 401
    refetchOnWindowFocus: false, // Не перезапрашивать при фокусе
  });

  // Синхронизируем состояние React Query с состоянием Zustand
  useEffect(() => {
    if (isSuccess) {
      // Успех: API вернул 200 и 'data.user'
      setUser((data as GetMeSuccess).user);
    } else if (isError) {
      // Ошибка: API вернул 401 (нет токена или он невалиден)
      clearUser();
    }
  }, [isSuccess, isError, data, setUser, clearUser]);

  // Этот компонент ничего не рендерит, пока идет загрузка
  // (Вы можете вернуть здесь глобальный спиннер)
  if (status === "loading") {
    return null; // или <GlobalSpinner />
  }

  return null;
};
