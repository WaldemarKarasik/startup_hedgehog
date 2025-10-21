import { Hono } from "hono";
import { requireAuth, requireDeveloper } from "../lib/requireAuth";
import { zValidator } from "@hono/zod-validator";
import z from "zod";
import { ProductCategories } from "../types";

export const NewProductSchema = z.object({
  // General info
  name: z.string().min(3, { message: "Минимум 3 символа" }),
  description: z.string().min(10, { message: "Минимум 10 символов" }),
  techStack: z
    .string({ message: "Это поле обязательно" })
    .nonempty({ message: "Это поле не может быть пустым" }),
  category: z.enum(ProductCategories, { message: "Выберите категорию" }),
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

export const productsRouter = new Hono().post(
  "/create",
  requireAuth,
  requireDeveloper,
  zValidator("json", z.object({})),
  async (c) => {
    const { screenshots } = c.req.valid("json");
  }
);

async function uploadToBunnyStorage(file: Blob, filePath: string) {
  const storageZoneName = process.env.BUNNY_STORAGE_NAME; // Replace with your storage zone name
  const accessKey = process.env.BUNNY_STORAGE_API_KEY; // Replace with your API key (from FTP & API Access)
  const region = "se"; // Or your region code (e.g., 'ny', 'la', 'sg')
  if (!accessKey) {
    console.error("Bunny storage access key not set");
    throw new Error("Bunny storage access key not set");
  }
  // Construct the API URL
  const url = `https://${region}.storage.bunnycdn.com/${storageZoneName}/${filePath}`;

  // Read the file using Bun
  const fileBuffer = await Bun.file(filePath).arrayBuffer();

  try {
    const response = await fetch(url, {
      method: "PUT",
      body: fileBuffer,
      headers: {
        AccessKey: accessKey,
        "Content-Type": "application/octet-stream",
      },
    });

    if (response.status === 201) {
      console.log("✅ File uploaded successfully!");
      return true;
    } else {
      console.log(`❌ Upload failed with status: ${response.status}`);
      const errorText = await response.text();
      console.log(`Error details: ${errorText}`);
      return false;
    }
  } catch (error) {
    console.error("❌ Network error:", error);
    return false;
  }
}
