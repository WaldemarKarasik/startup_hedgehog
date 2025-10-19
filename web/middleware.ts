import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// Определяем типы роутов
const authRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/dashboard"];
const adminRoutes = ["/dashboard/applications"];

// Интерфейс для JWT payload
interface JWTPayload {
  userId: string;
  role: "ADMIN" | "DEVELOPER" | "BUYER";
  email: string;
  exp: number;
}

/**
 * Декодирует и верифицирует JWT токен
 */
async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("[MIDDLEWARE] JWT_SECRET not configured");
      return null;
    }

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret)
    );

    return payload as unknown as JWTPayload;
  } catch (error) {
    console.error("[MIDDLEWARE] Token verification failed:", error);
    return null;
  }
}

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

  // --- 3. Получаем и верифицируем токен ---
  const token = request.cookies.get("token")?.value;
  let userPayload: JWTPayload | null = null;

  if (token) {
    userPayload = await verifyToken(token);
  }

  // --- 4. Определяем тип страницы ---
  const isAuthPage = authRoutes.includes(pathname);
  const isProtectedPage = protectedRoutes.some((route) =>
    finalPathname.startsWith(route)
  );
  const isAdminPage = adminRoutes.some((route) =>
    finalPathname.startsWith(route)
  );

  // --- 5. ЛОГИКА: Пользователь АВТОРИЗОВАН ---
  if (userPayload) {
    // Если авторизован и пытается зайти на sign-in/sign-up
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Проверка доступа к admin страницам
    if (isAdminPage) {
      if (userPayload.role !== "ADMIN") {
        // Не админ пытается зайти на admin страницу
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      // Админ - пропускаем
    }

    // Авторизован, не admin страница или админ на admin странице
    if (subdomain) {
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // --- 6. ЛОГИКА: Пользователь НЕ АВТОРИЗОВАН ---
  if (!userPayload) {
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
