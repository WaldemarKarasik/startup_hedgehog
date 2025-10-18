import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import z from "zod";
import { prisma } from "../lib/prisma";
import { decode, sign, verify } from "hono/jwt";
import { setCookie } from "hono/cookie";

// 1. Схема валидации Zod (на стороне БЭКЕНДА)
const signUpSchema = z.object({
  firstName: z
    .string() // <-- Убрали неверный параметр
    .min(1, "Имя обязательно") // <-- Вот правильный способ задать "required"
    .min(2, "Имя должно быть не менее 2 символов"),
  lastName: z
    .string() // <-- Убрали неверный параметр
    .min(1, "Фамилия обязательна") // <-- Вот правильный способ задать "required"
    .min(2, "Фамилия должна быть не менее 2 символов"),
  email: z
    .string() // <-- Убрали неверный параметр
    .min(1, "Email обязателен") // <-- Вот правильный способ задать "required"
    .email("Некорректный email адрес"),
  password: z
    .string() // <-- Убрали неверный параметр
    .min(1, "Пароль обязателен") // <-- Вот правильный способ задать "required"
    .min(8, "Пароль должен быть не менее 8 символов"),
});
const signInSchema = z.object({
  email: z.email("Некорректный email адрес"),
  password: z.string().min(1, "Пароль обязателен"),
});
// Мы экспортируем 'authRoutes', чтобы подключить их в основном 'index.ts'
export const authRoutes = new Hono()
  .post(
    "/signup",
    // 3. Middleware для валидации тела запроса
    zValidator("json", signUpSchema),
    // 4. Основной обработчик
    async (c) => {
      try {
        // 5. Получаем валидированные данные (типобезопасно)
        const body = c.req.valid("json");

        // 6. Проверка: не занят ли email?
        const existingUser = await prisma.user.findUnique({
          where: { email: body.email },
        });

        if (existingUser) {
          // 409 Conflict
          return c.json(
            {
              success: false,
              message: "Пользователь с таким email уже существует",
            },
            409
          );
        }

        // 7. Хеширование пароля с использованием Bun
        const passwordHash = await Bun.password.hash(body.password, {
          algorithm: "bcrypt", // 'bcrypt' - стандарт индустрии
          cost: 10, // 10-12 - хороший баланс
        });

        // 8. Создание пользователя в БД
        const newUser = await prisma.user.create({
          data: {
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            passwordHash: passwordHash,
            // Поле 'role' будет автоматически установлено в 'BUYER'
            // благодаря `@default(BUYER)` в вашей 'schema.prisma'
          },
          // 9. ВАЖНО: Выбираем только безопасные поля для ответа
          // НИКОГДА не возвращаем 'passwordHash' клиенту
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            role: true,
            createdAt: true,
          },
        });

        // (Опционально): Здесь вы бы создали JWT-токены
        // const { accessToken, refreshToken } = await createAuthTokens(newUser.id);
        // ... и установили бы их в cookies или вернули в JSON

        // 10. Отправляем успешный ответ (201 Created)
        return c.json(
          {
            success: true,
            message: "Аккаунт успешно создан",
            user: newUser,
            // accessToken: accessToken, // (Опционально)
          },
          201
        );
      } catch (error) {
        // 11. Общая обработка ошибок
        console.error("[AUTH_SIGNUP_ERROR]", error);
        return c.json(
          {
            success: false,
            message: "Внутренняя ошибка сервера",
          },
          500
        );
      }
    }
  )
  .post(
    "/signin",
    // 3. Валидация
    zValidator("json", signInSchema),
    // 4. Основной обработчик
    async (c) => {
      try {
        // 5. Получаем валидированные данные
        const body = c.req.valid("json");

        // 6. Ищем пользователя
        const user = await prisma.user.findUnique({
          where: { email: body.email },
        });

        // 7. Проверка: Пользователь не найден
        if (!user) {
          // 401 Unauthorized - Используем ОБЩУЮ ошибку для безопасности
          return c.json(
            { success: false, message: "Неверный email или пароль" },
            401
          );
        }

        // 8. Проверка: Пароль
        const isValidPassword = await Bun.password.verify(
          body.password,
          user.passwordHash
        );

        if (!isValidPassword) {
          // 401 Unauthorized - Та же ОБЩАЯ ошибка
          return c.json(
            { success: false, message: "Неверный email или пароль" },
            401
          );
        }

        const payload = {
          userId: user.id,
          role: user.role,
          email: user.email,
          // 'exp' (срок жизни) - устанавливается в секундах
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 дней
        };

        const secret = process.env.JWT_SECRET;
        if (!secret) {
          throw new Error("JWT_SECRET не установлен");
        }

        const token = await sign(payload, secret);

        // + --- 2. Устанавливаем токен в HttpOnly Cookie ---
        setCookie(c, "token", token, {
          httpOnly: true, // + Недоступен для JavaScript
          secure: process.env.NODE_ENV === "production", // + Только по HTTPS в production
          sameSite: "Lax", // + Защита от CSRF
          path: "/", // + Доступен на всем сайте
          maxAge: 60 * 60 * 24 * 7, // + 7 дней (в секундах)
        });
        const userPayload = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        };

        return c.json(
          {
            success: true,
            message: "Успешный вход",
            user: userPayload,
            // accessToken: accessToken, // (Опционально)
          },
          200
        );
      } catch (error) {
        // 11. Общая обработка ошибок
        console.error("[AUTH_SIGNIN_ERROR]", error);
        return c.json(
          {
            success: false,
            message: "Внутренняя ошибка сервера",
          },
          500
        );
      }
    }
  );
