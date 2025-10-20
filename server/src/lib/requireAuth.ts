import type { Context, MiddlewareHandler, Next } from "hono";
import { getCookie } from "hono/cookie";
import { verify } from "hono/jwt";
import type { JwtPayload } from "../types";

/**
 * Извлекает токен из cookie или Cookie header
 * Поддерживает как browser requests (getCookie), так и server-side fetch (Cookie header)
 */
function extractToken(c: Context): string | undefined {
  // 1. Пробуем получить из стандартных cookies (browser requests)
  let token = getCookie(c, "token");

  if (token) {
    return token;
  }

  // 2. Если нет - парсим Cookie header (server-side fetch)
  const cookieHeader = c.req.header("cookie");
  if (cookieHeader) {
    const cookies = cookieHeader.split(";").map((c) => c.trim());
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "token") {
        return value;
      }
    }
  }

  return undefined;
}

export const requireAuth: MiddlewareHandler<{
  Variables: { user: JwtPayload };
}> = async (c: Context, next: Next) => {
  const token = extractToken(c);
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
