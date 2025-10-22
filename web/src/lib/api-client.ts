import { InferResponseType } from "hono/client";
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
  typeof apiClient.api.developerApplication.list.$get,
  200
>;
