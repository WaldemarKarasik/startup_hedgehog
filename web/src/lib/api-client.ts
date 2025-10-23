import { InferResponseType } from "hono/client";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cache } from "react";
import { hcWithType } from "server/dist/client";

// API base URL (from environment or default to localhost)
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5173";

// Create typed RPC client
export const apiClient = hcWithType(API_URL, {
  fetch: (input: string | Request | URL, init: RequestInit | undefined) => {
    return fetch(input, {
      ...init,
      credentials: "include", // ✅ Принудительно!
    });
  },
});
export const serverFetch = async (
  url: string,
  cookies: ReadonlyRequestCookies,
  options?: RequestInit
): Promise<Response> => {
  const token = cookies.get("token");
  if (!token) {
    throw new Error("No token");
  }
  return fetch(`${API_URL}${url}`, {
    headers: {
      Cookie: `token=${token.value}`,
    },
    ...options,
  });
};
export const getCurrentUser = async (cookies: ReadonlyRequestCookies) => {
  const token = cookies.get("token");

  // 💡 Улучшение: Если токена нет, не делаем запрос и не логируем ошибку.
  // Это ожидаемое поведение для гостя.
  if (!token) {
    return null;
  }
  try {
    const me = await serverFetch(`/api/auth/me?token=${token.value}`, cookies, {
      next: { revalidate: 300, tags: ["me"] }, // Cache for 5 minutes
    });

    if (!me.ok) {
      return null;
    }

    const meRes: GetMe = await me.json();
    return meRes.success ? meRes.user : null;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return null;
  }
};
export type SignUpSuccess = InferResponseType<
  typeof apiClient.api.auth.signup.$post,
  201
>;

export type SignUpError = InferResponseType<
  typeof apiClient.api.auth.signup.$post,
  500
>;

export type SignInSuccess = InferResponseType<
  typeof apiClient.api.auth.signin.$post,
  200
>;
export type SignInError = InferResponseType<
  typeof apiClient.api.auth.signin.$post,
  500
>;
export type GetMe = InferResponseType<typeof apiClient.api.auth.me.$get>;
export type GetMeSuccess = InferResponseType<
  typeof apiClient.api.auth.me.$get,
  200
>;

export type GetApplications = InferResponseType<
  typeof apiClient.api.developerApplication.list.$get
>;
export type GetApplicationsSuccess = InferResponseType<
  typeof apiClient.api.developerApplication.list.$get,
  200
>;
export type GetApplicationsError = InferResponseType<
  typeof apiClient.api.developerApplication.list.$get,
  500
>;

export type GetDeveloperProductsSuccess = InferResponseType<
  (typeof apiClient.api.product.list)[":developerId"]["$get"],
  200
>;

export type GetCatalog = InferResponseType<
  typeof apiClient.api.product.list.$get
>;
export type GetCatalogSuccess = InferResponseType<
  typeof apiClient.api.product.list.$get,
  200
>;
