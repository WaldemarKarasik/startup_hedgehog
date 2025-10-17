import z from "zod";

export const developerApplicationSchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  email: z.string().email("Неверный формат email"),
  telegram: z.string().optional(),
  productName: z.string().min(1, "Название продукта обязательно"),
  productDescription: z
    .string()
    .min(10, "Описание должно быть минимум 10 символов"),
  revenueSharePercent: z.string().regex(/^\d+$/, "Должно быть числом"),
  githubUrl: z.string().url("Неверный формат URL"),
  demoUrl: z.string().url("Неверный формат URL"),
  videoUrl: z.string().url("Неверный формат URL"),
  hasUsers: z.enum(["yes", "demo", "no"]),
  userCount: z.string(),
  customizationReady: z.enum(["yes", "maybe", "no"]),
  targetBusinesses: z
    .string()
    .min(10, "Описание целевой аудитории должно быть минимум 10 символов"),
  portfolio: z.string(),
  additionalInfo: z.string(),
});

export type DeveloperApplicationFormData = z.infer<
  typeof developerApplicationSchema
>;
