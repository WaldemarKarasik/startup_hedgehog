import { Hono } from "hono";
import { requireAuth, requireDeveloper } from "../lib/requireAuth";
import { zValidator } from "@hono/zod-validator";
import { NewProductSchema } from "shared";
export const productsRouter = new Hono().post(
  "/create",
  requireAuth,
  requireDeveloper,
  zValidator("json", NewProductSchema),
  async (c) => {
    const { images } = c.req.valid("json");
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
