import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import z from "zod";
import { prisma } from "../lib/prisma";

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

// Мы экспортируем 'authRoutes', чтобы подключить их в основном 'index.ts'
export const authRoutes = new Hono().post(
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
);
