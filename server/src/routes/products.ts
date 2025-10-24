import { Hono } from "hono";
import { requireAuth, requireDeveloper } from "../lib/requireAuth";
import { zValidator } from "@hono/zod-validator";
import { NewProductSchema } from "shared";
import z from "zod";
import { prisma } from "../lib/prisma";
import { S3Client } from "bun";
import { HTTPException } from "hono/http-exception";
const newProductSchema = z.object({
  ...NewProductSchema.shape,
  images: z.array(z.instanceof(Blob)),
});
export const productsRouter = new Hono()

  .post("/create", requireAuth, requireDeveloper, async (c) => {
    try {
      const formData = await c.req.formData();

      // Extract fields and images
      const fields: Record<string, any> = {};
      const images: Array<{
        name: string;
        type: string;
        size: number;
        arrayBuffer(): Promise<ArrayBuffer>;
      }> = [];

      for (const [key, value] of formData.entries()) {
        const item = value as any;
        const isFile =
          item && typeof item === "object" && "name" in item && "size" in item;

        if (isFile) {
          images.push(item);
        } else {
          // Parse numeric fields
          const numericFields = [
            "customizationPrice",
            "revenueShare",
            "revenueShareDuration",
            "supportPeriod",
          ];

          if (numericFields.includes(key)) {
            fields[key] = parseInt(value as string) || 0;
          } else {
            fields[key] = value;
          }
        }
      }

      if (images.length === 0) {
        return c.json({ success: false, error: "No images provided" }, 400);
      }

      // Validate form data (excluding images)
      const validatedData = NewProductSchema.extend({ images: z.any() }).parse(
        fields
      );

      // Upload images to Bunny Storage
      const uploadedImageUrls = await Promise.all(
        images.map(async (image) => {
          try {
            const imageUrl = await uploadToStorage(
              `product-${slugify(validatedData["name"])}`,
              image
            );
            return imageUrl;
          } catch (error) {
            console.error(`Failed to upload ${image.name}:`, error);
            throw error;
          }
        })
      );

      // Create product in database with image URLs
      const product = await prisma.product.create({
        data: {
          ...validatedData,
          images: uploadedImageUrls, //Store the Bunny Storage URLs
          developerId: c.get("user").userId,
          techStack: validatedData["techStack"].split(" "),
          slug: slugify(validatedData["name"]),
        },
      });

      return c.json(
        {
          success: true,
          data: {
            product: {
              id: product.id,
              name: product.name,
              images: product.images,
            },
          },
        },
        201
      );
    } catch (error) {
      console.error("Product creation error:", error);

      if (error instanceof z.ZodError) {
        return c.json(
          { success: false, error: "Validation failed", details: error },
          400
        );
      }

      return c.json({ success: false, error: error }, 500);
    }
  })
  .get(
    "/list",

    async (c) => {
      console.log("fetch catalog");
      try {
        const products = await prisma.product.findMany({
          include: {
            developer: {
              select: {
                firstName: true,
                lastName: true,
                avatar: true,
                rating: true,
              },
            },
          },
        });
        return c.json(
          {
            success: true,
            data: products.map((product) => ({
              ...product,
              developer: {
                ...product.developer,
                rating: product.developer.rating.toNumber(),
              },
            })),
          },
          200
        );
      } catch (error) {
        console.error(error);
        return c.json(
          {
            success: false,
            error: "Couldn't get products",
          },
          500
        );
      }
    }
  )
  .get(
    "/list/:developerId",
    zValidator("param", z.object({ developerId: z.string() })),
    async (c) => {
      console.log("fetch developer products");
      const { developerId } = c.req.valid("param");
      try {
        const developerProducts = await prisma.product.findMany({
          where: { developerId },
        });
        return c.json(
          {
            success: true,
            data: developerProducts,
          },
          200
        );
      } catch (error) {
        console.error(error);
        return c.json(
          {
            success: false,
            error: "Couldn't get developer products",
          },
          500
        );
      }
    }
  )
  .delete(
    "/delete/:developerId/:productId",
    requireAuth,
    requireDeveloper,
    zValidator(
      "param",
      z.object({ developerId: z.string(), productId: z.string() })
    ),
    async (c) => {
      try {
        const user = c.get("user");
        const { developerId, productId } = c.req.valid("param");
        const ownsProduct = user.userId == developerId;
        if (!ownsProduct) {
          throw new HTTPException(403);
        }
        await prisma.product.delete({
          where: { id: productId },
        });
        return c.json({ success: true });
      } catch (err) {
        return c.json(
          { success: false, error: "Couldn't delete product" },
          500
        );
      }
    }
  )
  .get("/:productId", async (c) => {
    try {
      const { productId } = c.req.param();
      console.log("fetch product", productId);

      const product = await prisma.product.findFirst({
        where: { id: productId },
        include: {
          developer: {
            select: {
              firstName: true,
              lastName: true,
              avatar: true,
              rating: true,
            },
          },
        },
      });
      if (!product) {
        throw new HTTPException(404);
      }
      return c.json({
        success: true,
        data: {
          ...product,
          developer: {
            ...product.developer,
            rating: product.developer.rating.toNumber(),
          },
        },
      });
    } catch (error) {
      console.error(error);
      return c.json({ success: false, error: "Couldn't fetch product" }, 500);
    }
  });
async function uploadToStorage(
  prefix: string,
  file: {
    name: string;
    type: string;
    arrayBuffer(): Promise<ArrayBuffer>;
  }
): Promise<string> {
  const endpoint = process.env.AWS_ENDPOINT_URL;
  const region = process.env.AWS_REGION;
  const bucket = process.env.AWS_BUCKET;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const cdnUrl = process.env.AWS_CDN_URL;
  if (
    !endpoint ||
    !region ||
    !bucket ||
    !secretAccessKey ||
    !accessKeyId ||
    !cdnUrl
  ) {
    throw new Error(
      "No S3 endpoint, region, bucket, access key id, secret access key or cdn url provided"
    );
  }
  const s3Client = new S3Client({
    endpoint,
    region,
    bucket,
    secretAccessKey,
    accessKeyId,
  });
  await s3Client.write(`${prefix}/${file.name}`, await file.arrayBuffer());
  return `${cdnUrl}/${prefix}/${file.name}`;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
