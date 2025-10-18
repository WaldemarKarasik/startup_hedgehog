import type { Context, MiddlewareHandler, Next } from "hono";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";

export type JwtPayload = {
  userId: string;
  role: string;
  exp: number;
};

export const requireAuth: MiddlewareHandler<{
  Variables: { user: JwtPayload };
}> = async (c: Context, next: Next) => {
  const token = getCookie(c, "token");
  
  // Диагностическое логирование
  console.log("[requireAuth] Cookie header:", c.req.header("cookie"));
  console.log("[requireAuth] Token from getCookie:", token);
  console.log("[requireAuth] Request URL:", c.req.url);
  console.log("[requireAuth] Request headers:", Object.fromEntries(
    Array.from(c.req.raw.headers.entries())
  ));
  
  if (!token) {
    return c.json({ success: false, message: "Требуется авторизация" }, 401);
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET не установлен");
  }

  try {
    // 6. Проверяем токен
    const payload = (await verify(token, secret)) as JwtPayload;

    // 7. Проверяем срок годности (на всякий случай)
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return c.json({ success: false, message: "Сессия истекла" }, 401);
    }

    // 8. УСПЕХ: Сохраняем payload в контекст
    c.set("user", payload);
    await next();
  } catch (error) {
    // 9. ОШИБКА: Токен невалидный
    return c.json({ success: false, message: "Невалидный токен" }, 401);
  }
};
