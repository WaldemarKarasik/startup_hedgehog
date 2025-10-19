// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const authRoutes = ["/sign-in", "/sign-up"];
const protectedRoutes = ["/dashboard"];
const adminRoutes = ["/dashboard/applications"];
export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone(); // Клонируем для перезаписи
  const { pathname } = request.nextUrl; // Путь в браузере (напр., '/')

  // --- 2. Получаем токен ---
  const token = request.cookies.get("token")?.value;

  // --- 3. Логика Исключений (Ваш код) ---
  // (Сначала пропускаем API, статику и т.д.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") || // ВАЖНО: '/api' пропускается
    pathname.startsWith("/static") ||
    /\.(jpe?g|png|gif|svg|ico|css|js|txt)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // --- 4. Логика Поддоменов (Ваш код) ---
  const host =
    request.headers.get("host") || request.headers.get("x-forwarded-host");

  // Обновите ROOT_DOMAIN на ваш
  const ROOT_DOMAIN =
    process.env.NODE_ENV === "production" ? "startappezh.ru" : "localhost:3000";

  if (!host) {
    return NextResponse.next();
  }

  const currentHost = host.replace(`:${url.port}`, "");
  let subdomain = null;

  if (currentHost !== ROOT_DOMAIN) {
    subdomain = currentHost.split(".")[0];
  }

  // --- 5. Определяем ФИНАЛЬНЫЙ (внутренний) путь ---
  // 'finalPathname' - это то, что увидит Next.js (напр. /dashboard/settings)
  let finalPathname = pathname;

  if (subdomain === "dashboard") {
    // `dashboard.example.com/settings` -> `/dashboard/settings`
    // `dashboard.example.com/` -> `/dashboard`
    finalPathname = `/dashboard${pathname === "/" ? "" : pathname}`;
  } else if (subdomain === "blog") {
    // `blog.example.com/my-post` -> `/blog/my-post`
    finalPathname = `/blog${pathname === "/" ? "" : pathname}`;
  }

  // Обновляем pathname в клонированном URL для перезаписи
  url.pathname = finalPathname;

  // --- 6. Запускаем Логику Авторизации ---

  // 'pathname' = что в браузере
  // 'finalPathname' = куда мы идем внутри

  const isAuthPage = authRoutes.includes(pathname);
  const isProtectedPage = protectedRoutes.some((route) =>
    finalPathname.startsWith(route)
  );
  const isAdminPage = adminRoutes.some((route) =>
    finalPathname.startsWith(route)
  );

  // --- ЛОГИКА 1: Пользователь АВТОРИЗОВАН (есть токен) ---
  if (token) {
    // И он пытается зайти на /sign-in или /sign-up?
    if (isAuthPage) {
      // Редирект в дашборд. (URL /dashboard)
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Пользователь авторизован и идет НЕ на страницу входа.
    // Ему можно везде. Просто переписываем (rewrite) URL, если
    // был поддомен, или пропускаем (next) если нет.
    if (subdomain) {
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // --- ЛОГИКА 2: Пользователь НЕ АВТОРИЗОВАН (нет токена) ---
  if (!token) {
    // И он пытается зайти на ЗАЩИЩЕННУЮ страницу?
    if (isProtectedPage) {
      // Редирект на страницу входа
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    // Пользователь не авторизован, но идет на публичную
    // (напр. 'blog.example.com') или гостевую ('/sign-in') страницу.
    // Ему можно. Переписываем URL (если был поддомен) или пропускаем.
    if (subdomain) {
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Фолбэк (хотя до него не должно дойти)
  return NextResponse.next();
}

// Конфигурация Matcher для оптимизации
// Middleware будет запускаться *только* для путей, НЕ соответствующих этому regex
export const config = {
  matcher: [
    /*
     * Пропускаем все внутренние пути Next.js и статичные файлы.
     * '/((?!_next/static|_next/image|favicon.ico).*)'
     * Вы можете настроить это более гибко, но для большинства случаев
     * проще отфильтровать ненужные пути внутри самого middleware (см. выше).
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
