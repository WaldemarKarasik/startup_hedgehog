import { InferResponseType } from "hono/client";
import { hcWithType } from "server/dist/client";

// API base URL (from environment or default to localhost)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5173";

// Create typed RPC client
export const apiClient = hcWithType(API_URL, {
  init: { credentials: "include" },
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
