# Authentication Guide

## 🔒 Cookie-Based Authentication

Наше приложение использует JWT токены в HttpOnly cookies для безопасной аутентификации.

## ⚠️ ВАЖНО: Client vs Server Components

### ❌ НЕ РАБОТАЕТ: Вызов из Server Component

```typescript
// ❌ app/layout.tsx (Server Component)
export default async function RootLayout({ children }) {
  const me = await apiClient.api.auth.me.$get(); // НЕ РАБОТАЕТ!
  // Server-side код не имеет доступа к браузерным cookies
  
  return <>{children}</>;
}
```

**Почему не работает:**
- Next.js Server Components выполняются на сервере (Node.js/Bun)
- У них НЕТ доступа к браузерным cookies
- `credentials: 'include'` работает только в браузере

### ✅ РАБОТАЕТ: Вызов из Client Component

```typescript
// ✅ app/_components/UserProfile.tsx
"use client"; // ОБЯЗАТЕЛЬНО!

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/src/lib/api-client";

export function UserProfile() {
  const { data } = useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const response = await apiClient.api.auth.me.$get();
      return response.json();
    },
  });

  return <div>{data?.user?.email}</div>;
}
```

**Почему работает:**
- `"use client"` - компонент выполняется в браузере
- Браузер автоматически отправляет cookies
- `credentials: 'include'` в api-client гарантирует это

## 🔐 Защищённые Endpoints

### Server Side (routes/auth.ts)

```typescript
// Защищённый endpoint
.get("/me", requireAuth, async (c) => {
  const user = c.get("user"); // JWT payload из middleware
  return c.json({ success: true, user });
})
```

### Client Side (React Components)

```typescript
// 1. Sign In
const { mutate: signIn } = useMutation({
  mutationFn: async (data) => {
    const res = await apiClient.api.auth.signin.$post({ json: data });
    return res.json();
  },
});

// 2. Вызов защищённого endpoint
const { data } = useQuery({
  queryKey: ["user"],
  queryFn: async () => {
    const res = await apiClient.api.auth.me.$get();
    return res.json();
  },
});
```

## 🍪 Cookie Configuration

### Development (HTTP)
```typescript
{
  httpOnly: true,
  path: "/",
  maxAge: 604800, // 7 дней
  // БЕЗ secure и sameSite - для работы на HTTP cross-origin
}
```

### Production (HTTPS)
```typescript
{
  httpOnly: true,
  secure: true,
  sameSite: "Lax",
  path: "/",
  maxAge: 604800,
}
```

## 🔍 Debugging

### 1. Проверь cookie в браузере
```
DevTools → Application → Cookies → http://localhost:5173
Должен быть: token = eyJ...
```

### 2. Диагностический endpoint (только dev)
```bash
GET http://localhost:5173/api/auth/debug-cookies
```

### 3. Server logs
```
[requireAuth] Cookie header: token=eyJ...
[requireAuth] Token from getCookie: eyJ...
```

## 🚨 Troubleshooting

### "Требуется авторизация" (401)

**Проблема:** Cookie не передаётся в запросе

**Возможные причины:**

1. **Вызов из Server Component**
   - ❌ Server Component (async function)
   - ✅ Client Component ("use client")

2. **Cookie не установлен**
   - Проверь DevTools → Cookies
   - Сделай sign-in заново

3. **CORS проблемы**
   - Убедись что frontend URL в CORS whitelist
   - Проверь `credentials: true` в CORS настройках

4. **Token истёк**
   - JWT токены живут 7 дней
   - Сделай sign-in заново

### User-Agent: "Bun/1.2.23"

Если видишь это в логах - **запрос идёт с server-side!**

✅ Переместить вызов API в Client Component с `"use client"`

## 📝 Best Practices

1. **Всегда используй Client Components для API вызовов**
   ```typescript
   "use client";
   ```

2. **Используй React Query для кеширования**
   ```typescript
   useQuery({ queryKey: ["user"], queryFn: ... })
   ```

3. **Обрабатывай ошибки аутентификации**
   ```typescript
   if (error?.status === 401) {
     // Redirect to sign-in
   }
   ```

4. **Не храни JWT в localStorage**
   - Используй HttpOnly cookies
   - Защита от XSS атак

## 🎯 Example: Protected Page

```typescript
// app/dashboard/page.tsx
import { UserProfile } from "@/app/_components/UserProfile";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfile /> {/* Client Component! */}
    </div>
  );
}
```

```typescript
// app/_components/UserProfile.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/src/lib/api-client";
import { useRouter } from "next/navigation";

export function UserProfile() {
  const router = useRouter();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const res = await apiClient.api.auth.me.$get();
      if (!res.ok) throw new Error("Unauthorized");
      return res.json();
    },
    retry: false,
  });

  // Redirect to sign-in if not authenticated
  if (error) {
    router.push("/sign-in");
    return null;
  }

  if (isLoading) return <div>Загрузка...</div>;

  return <div>Привет, {data.user.email}!</div>;
}
```

## 🔐 Security Notes

1. **HttpOnly cookies** - защита от XSS
2. **SameSite (prod)** - защита от CSRF
3. **Secure (prod)** - только HTTPS
4. **JWT expiration** - 7 дней
5. **Password hashing** - bcrypt (cost 10)

---

**Следуй этому гайду и authentication будет работать правильно!** ✨
