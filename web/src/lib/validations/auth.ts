import { z } from "zod";

// Sign In Schema
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email обязателен")
    .email("Введите корректный email"),
  password: z
    .string()
    .min(1, "Пароль обязателен")
    .min(6, "Пароль должен содержать минимум 6 символов"),
});

export type SignInFormData = z.infer<typeof signInSchema>;

// Sign Up Schema
export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "Имя обязательно")
      .min(2, "Имя должно содержать минимум 2 символа")
      .max(50, "Имя не должно превышать 50 символов"),
    lastName: z
      .string()
      .min(1, "Фамилия обязательна")
      .min(2, "Фамилия должна содержать минимум 2 символа")
      .max(50, "Фамилия не должна превышать 50 символов"),
    email: z
      .string()
      .min(1, "Email обязателен")
      .email("Введите корректный email"),
    password: z
      .string()
      .min(1, "Пароль обязателен")
      .min(8, "Пароль должен содержать минимум 8 символов")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Пароль должен содержать заглавные и строчные буквы, а также цифры"
      ),
    confirmPassword: z.string().min(1, "Подтверждение пароля обязательно"),
    acceptTerms: z
      .boolean()
      .refine((val) => val === true, {
        message: "Необходимо принять условия использования",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
