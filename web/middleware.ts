import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Определяем типы роутов
const authRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/dashboard"];

/**
 * ВАЖНО: Middleware проверяет только наличие токена (authentication).
 * Проверка ролей (authorization) выполняется на уровне Server Components
 * через API вызовы к backend, чтобы избежать дублирования JWT_SECRET.
 */

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;

  // --- 1. Пропускаем технические пути ---
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    /\.(jpe?g|png|gif|svg|ico|css|js|txt)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // --- 2. Обработка поддоменов (как в оригинальном proxy.ts) ---
  const host =
    request.headers.get("host") || request.headers.get("x-forwarded-host");

  const ROOT_DOMAIN =
    process.env.NODE_ENV === "production"
      ? "startappezh.ru"
      : "localhost:3000";

  if (!host) {
    return NextResponse.next();
  }

  const currentHost = host.replace(`:${url.port}`, "");
  let subdomain = null;

  if (currentHost !== ROOT_DOMAIN) {
    subdomain = currentHost.split(".")[0];
  }

  let finalPathname = pathname;

  if (subdomain === "dashboard") {
    finalPathname = `/dashboard${pathname === "/" ? "" : pathname}`;
  } else if (subdomain === "blog") {
    finalPathname = `/blog${pathname === "/" ? "" : pathname}`;
  }

  url.pathname = finalPathname;

  // --- 3. Проверяем наличие токена (НЕ декодируем его) ---
  const token = request.cookies.get("token")?.value;

  // --- 4. Определяем тип страницы ---
  const isAuthPage = authRoutes.includes(pathname);
  const isProtectedPage = protectedRoutes.some((route) =>
    finalPathname.startsWith(route)
  );

  // --- 5. ЛОГИКА: Пользователь АВТОРИЗОВАН (есть токен) ---
  if (token) {
    // Если авторизован и пытается зайти на sign-in/sign-up
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Пропускаем авторизованного пользователя
    // Проверка ролей будет на уровне Server Component
    if (subdomain) {
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // --- 6. ЛОГИКА: Пользователь НЕ АВТОРИЗОВАН (нет токена) ---
  if (!token) {
    // Пытается зайти на защищенную страницу
    if (isProtectedPage) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    // Не авторизован, но идет на публичную страницу
    if (subdomain) {
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Фолбэк
  return NextResponse.next();
}

// Конфигурация matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
