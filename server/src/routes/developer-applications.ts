import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import type {
  CustomizationReadyOption,
  HasUsersOption,
} from "../generated/prisma";

// Validation schema for developer application
export const developerApplicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  telegram: z.string().optional(),
  productName: z.string().min(1, "Product name is required"),
  productDescription: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  revenueSharePercent: z.string().regex(/^\d+$/, "Must be a number"),
  githubUrl: z.string().url("Invalid GitHub URL"),
  demoUrl: z.string().url("Invalid demo URL"),
  videoUrl: z.string().url("Invalid video URL"),
  hasUsers: z.enum(["yes", "demo", "no"]),
  userCount: z.string(),
  customizationReady: z.enum(["yes", "no", "maybe"]),
  targetBusinesses: z
    .string()
    .min(10, "Target businesses description must be at least 10 characters"),
  portfolio: z.string().optional().default(""),
  additionalInfo: z.string().optional().default(""),
});

export const developerApplicationsRouter = new Hono().post(
  "/",
  zValidator("json", developerApplicationSchema),
  async (c) => {
    try {
      const data = c.req.valid("json");
      const application = await prisma.developerApplication.create({
        data: {
          name: data.name,
          email: data.email,
          telegram: data.telegram || null,
          productName: data.productName,
          productDescription: data.productDescription,
          revenueSharePercent: parseInt(data.revenueSharePercent, 10),
          githubUrl: data.githubUrl || null,
          demoUrl: data.demoUrl || null,
          videoUrl: data.videoUrl || null,
          hasUsers: data.hasUsers as HasUsersOption,
          userCount: data.userCount || null,
          customizationReady:
            data.customizationReady as CustomizationReadyOption,
          targetBusinesses: data.targetBusinesses || null,
          portfolio: data.portfolio || null,
          additionalInfo: data.additionalInfo || null,
        },
      });
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
 * POST /api/developer-applications
 * Submit a new developer application
 */

/**
 * GET /api/developer-applications/health
 * Health check for Google Sheets connection
 */
