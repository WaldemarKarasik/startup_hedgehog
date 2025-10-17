import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { getGoogleSheetsClient } from "../lib/google-sheets";

// Validation schema for developer application
const developerApplicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  telegram: z.string().min(1, "Telegram is required"),
  productName: z.string().min(1, "Product name is required"),
  productDescription: z.string().min(10, "Description must be at least 10 characters"),
  revenueSharePercent: z.string().regex(/^\d+$/, "Must be a number"),
  githubUrl: z.string().url("Invalid GitHub URL"),
  demoUrl: z.string().url("Invalid demo URL"),
  videoUrl: z.string().url("Invalid video URL"),
  hasUsers: z.enum(["yes", "demo", "no"]),
  userCount: z.string(),
  customizationReady: z.enum(["yes", "maybe", "no"]),
  targetBusinesses: z.string().min(10, "Target businesses description must be at least 10 characters"),
  portfolio: z.string().optional().default(""),
  additionalInfo: z.string().optional().default(""),
});

export const developerApplicationsRouter = new Hono();

/**
 * POST /api/developer-applications
 * Submit a new developer application
 */
developerApplicationsRouter.post(
  "/",
  zValidator("json", developerApplicationSchema),
  async (c) => {
    try {
      const data = c.req.valid("json");

      // Get Google Sheets client
      const sheetsClient = getGoogleSheetsClient();

      // Add application to Google Sheets
      await sheetsClient.addDeveloperApplication(data);

      return c.json(
        {
          success: true,
          message: "Application submitted successfully",
        },
        201
      );
    } catch (error) {
      console.error("Error processing developer application:", error);

      return c.json(
        {
          success: false,
          error: "Failed to submit application. Please try again later.",
        },
        500
      );
    }
  }
);

/**
 * GET /api/developer-applications/health
 * Health check for Google Sheets connection
 */
developerApplicationsRouter.get("/health", async (c) => {
  try {
    const sheetsClient = getGoogleSheetsClient();
    const isConnected = await sheetsClient.testConnection();

    if (isConnected) {
      return c.json({
        success: true,
        message: "Google Sheets connection is healthy",
      });
    } else {
      return c.json(
        {
          success: false,
          message: "Google Sheets connection failed",
        },
        503
      );
    }
  } catch (error) {
    return c.json(
      {
        success: false,
        message: "Health check failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      503
    );
  }
});
