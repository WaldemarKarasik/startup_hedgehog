import { hc, InferResponseType } from "hono/client";
import type { AppType } from "../../../server/src/index";

// API base URL (from environment or default to localhost)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5173";

// Create typed RPC client
export const apiClient = hc<AppType>(API_URL);

export type SignUpSuccess = InferResponseType<
  typeof apiClient.api.auth.signup.$post,
  201
>;

export type SignUpError = InferResponseType<
  typeof apiClient.api.auth.signup.$post,
  500
>;
