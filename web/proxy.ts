// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  // 1. Получаем URL запроса
  const url = request.nextUrl.clone(); // Клонируем, чтобы безопасно изменять
  const { pathname } = request.nextUrl; // Путь (напр., '/dashboard')

  // 2. Получаем хост (домен) из заголовков
  // Используем 'x-forwarded-host', если есть (для прокси), иначе 'host'
  const host =
    request.headers.get("host") || request.headers.get("x-forwarded-host");

  // 3. Определяем корневой домен (настройте под себя)
  // В режиме разработки это будет 'localhost:3000'
  // В production это будет 'example.com'
  const ROOT_DOMAIN =
    process.env.NODE_ENV === "production" ? "example.com" : "localhost:3000";

  if (!host) {
    // Если хост не определен, ничего не делаем
    return NextResponse.next();
  }

  // 4. Извлекаем поддомен
  // Убираем порт ( :3000 ) для локальной разработки
  const currentHost = host.replace(`:${url.port}`, "");
  let subdomain = null;

  if (currentHost !== ROOT_DOMAIN) {
    // Если хост не равен корневому домену, извлекаем поддомен
    // 'blog.example.com' -> 'blog'
    // 'blog.localhost' -> 'blog'
    subdomain = currentHost.split(".")[0];
  }

  // 5. Логика перезаписи (Rewriting)
  // Это главный механизм. URL в браузере не меняется!

  // Исключаем системные пути Next.js и статичные файлы
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    /\.(jpe?g|png|gif|svg|ico|css|js|txt)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Если есть поддомен 'app', переписываем на /app
  if (subdomain === "dashboard") {
    // `app.example.com/dashboard` -> переписывается на `/app/dashboard`
    url.pathname = `/dashboard${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Если есть поддомен 'blog', переписываем на /blog
  if (subdomain === "blog") {
    // `blog.example.com/my-post` -> переписывается на `/blog/my-post`
    url.pathname = `/blog${pathname}`;
    return NextResponse.rewrite(url);
  }

  // Если это корневой домен (subdomain === null) и путь не '/'
  // (например, example.com/about), мы *не* хотим переписывать его на /app или /blog.
  // Можно добавить логику для главного сайта, если он в своей папке,
  // например /app/(main)

  // По умолчанию просто продолжаем обработку
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
