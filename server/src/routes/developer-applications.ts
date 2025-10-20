import { Hono, type Env } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { prisma } from "../lib/prisma";

import { requireAuth } from "../lib/requireAuth";
import { HTTPException } from "hono/http-exception";

// Validation schema for developer application
export const developerApplicationSchema = z.object({
  telegram: z.string().optional(),
  productName: z.string().min(1, "Product name is required"),
  productDescription: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  customizationprice: z.number().min(300000).max(1000000),
  revenueSharePercent: z.number().min(5).max(20),
  githubUrl: z.string().url("Invalid GitHub URL"),
  demoUrl: z.string().url("Invalid demo URL"),
  videoUrl: z.string().url("Invalid video URL"),
  hasUsers: z.enum(["yes", "no"]),
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
  requireAuth,
  zValidator("json", developerApplicationSchema),
  async (c) => {
    try {
      const data = c.req.valid("json");
      const userId = c.get("user").userId;
      const user = await prisma.user.findFirst({ where: { id: userId } });
      if (!user) {
        throw new HTTPException(409);
      }
      const application = await prisma.developerApplication.create({
        data: { ...data, user: { connect: { id: user.id } } },
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
