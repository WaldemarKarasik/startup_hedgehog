import {
  ProductCategory,
  ProductStatus,
  type Product,
} from "server/src/generated/prisma/client";
export {
  DeveloperApplicationStatuses,
  UserRoles,
  ProductCategories,
} from "server/src/types";
import z from "zod";

export const developerApplicationSchema = z.object({
  telegram: z.string().optional(),
  productName: z.string().min(1, "Product name is required"),
  productDescription: z.string().min(10, "Не менее 10 символов"),
  customizationPrice: z.number().min(300000).max(1000000),
  revenueSharePercent: z.number().min(5).max(20),
  githubUrl: z.string().url("Invalid GitHub URL"),
  demoUrl: z.string().url("Invalid demo URL"),
  videoUrl: z.string().url("Invalid video URL"),
  hasUsers: z.enum(["yes", "no"]),
  userCount: z.string(),
  customizationReady: z.enum(["yes", "no", "maybe"]),
  targetBusinesses: z.string().min(10, "Не менее 10 символов"),
  portfolio: z.string().optional(),
  additionalInfo: z.string().optional(),
});
export type DeveloperApplicationForm = z.infer<
  typeof developerApplicationSchema
>;

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

export type DeveloperProduct = Product;
export const PRODUCT_STATUS = ProductStatus;
