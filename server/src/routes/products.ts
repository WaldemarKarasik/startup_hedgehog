import { Hono } from "hono";
import { requireAuth, requireDeveloper } from "../lib/requireAuth";
import { zValidator } from "@hono/zod-validator";
import z from "zod";

export const productsRouter = new Hono().post(
  "/create",
  requireAuth,
  requireDeveloper,
  zValidator("json", z.object({ screenshots: Blob })),
  async (c) => {
    const { screenshots } = c.req.valid("json");
    const file = await uploadToBunnyStorage(
      screenshots,
      "/project1/screenshots"
    );
  }
);

async function uploadToBunnyStorage(file: Blob, filePath: string) {
  const storageZoneName = "YOUR_STORAGE_ZONE_NAME"; // Replace with your storage zone name
  const accessKey = "YOUR_STORAGE_API_KEY"; // Replace with your API key (from FTP & API Access)
  const region = "fr"; // Or your region code (e.g., 'ny', 'la', 'sg')

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
