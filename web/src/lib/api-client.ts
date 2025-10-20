import { InferResponseType } from "hono/client";
// Import from source for type inference (dist may be outdated)
import { hcWithType } from "../../../server/src/client";

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
// NOTE: Hono RPC типы работают только с базовыми методами ($get, $post и т.д.)
// Вложенные пути (/list, /detail) не поддерживаются автоматически
// Используем manual typing для таких случаев
export type GetApplicationsSuccess = InferResponseType<
  (typeof apiClient.api)["developer-application"]["list"]["$get"],
  200
>;
