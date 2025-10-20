import type { JwtPayload } from ".";
declare module "hono" {
  interface ContextVariableMap {
    user: JwtPayload; // For authenticated user
  }
}
