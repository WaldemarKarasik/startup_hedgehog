import { ProductCategory } from "server/src/generated/prisma/client";
import { developerApplicationSchema as applicationSchema } from "server/src/routes/developer-applications";
export {
  DeveloperApplicationStatuses,
  UserRoles,
  ProductCategories,
} from "server/src/types";
import z from "zod";

export type DeveloperApplicationForm = z.infer<typeof applicationSchema>;
export const developerApplicationSchema = applicationSchema;
export const NewProductSchema = z.object({
  // General info
  name: z.string().min(3, { message: "Минимум 3 символа" }),
  description: z.string().min(10, { message: "Минимум 10 символов" }),
  techStack: z
    .string({ message: "Это поле обязательно" })
    .nonempty({ message: "Это поле не может быть пустым" }),
  category: z.enum(ProductCategory, { message: "Выберите категорию" }),
  // Price
  customizationPrice: z.number().min(300000).max(450000),
  revenueShare: z.number().min(5).max(20),
  revenueShareDuration: z.number().min(1).max(100),
  // Support
  supportPeriod: z
    .number()
    .min(1, { message: "Минимум 1 месяц" })
    .max(100, { message: "Максимум 100 месяцев" }),
  // Media
  images: z
    .array(z.instanceof(File))
    .min(1, "Загрузите по меньшей мере 1 изображение")
    .max(10, "Не более 10 изображений")
    .refine(
      (files) => files.every((file) => file.size <= 5 * 1024 * 1024),
      "Each image must be less than 5MB"
    )
    .refine(
      (files) =>
        files.every((file) =>
          ["image/jpeg", "image/png", "image/webp"].includes(file.type)
        ),
      "Only JPG, PNG, WEBP formats are supported"
    ),
});
