import { Hono, type Env } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { prisma } from "../lib/prisma";

import { requireAdmin, requireAuth } from "../lib/requireAuth";
import { HTTPException } from "hono/http-exception";
import {
  ApplicationStatus,
  type DeveloperApplication,
} from "../generated/prisma";
import { developerApplicationSchema } from "shared";

export const developerApplicationsRouter = new Hono()
  .post(
    "/create",
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
        const existingApplication = await prisma.developerApplication.findFirst(
          {
            where: { userId: user.id },
          }
        );
        if (existingApplication) {
          throw new HTTPException(403);
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
  )
  .get("/list", requireAuth, requireAdmin, async (c) => {
    try {
      const applications: DeveloperApplication[] = await prisma.$queryRaw`
        SELECT * FROM "DeveloperApplication"
        ORDER BY 
         CASE 
          WHEN status::text = ${ApplicationStatus.NEW} THEN 1
          WHEN status::text = ${ApplicationStatus.IN_REVIEW} THEN 2
          WHEN status::text = ${ApplicationStatus.APPROVED} THEN 3
          WHEN status::text = ${ApplicationStatus.REJECTED} THEN 4
        ELSE 5
        END,
        "createdAt" DESC
      `;
      return c.json({ success: true, data: applications }, 200);
    } catch (error) {
      console.error("Error processing developer application:", error);

      return c.json(
        {
          success: false,
          error:
            "Failed to list developer applications. Please try again later.",
        },
        500
      );
    }
  })
  .post(
    "/setStatus",
    requireAuth,
    zValidator("query", z.object({ id: z.string() })),
    zValidator("json", z.enum(ApplicationStatus)),
    async (c) => {
      try {
        const { id } = c.req.valid("query");
        const status = c.req.valid("json");
        const userRole = c.get("user").role;
        if (userRole != "ADMIN") {
          throw new HTTPException(403);
        }

        const application = await prisma.developerApplication.update({
          where: { id },
          data: {
            status,
          },
        });
        return c.json(
          {
            success: true,
            message: "Developer Application updated successfuly",
          },
          200
        );
      } catch (error) {
        console.error("Error processing developer application:", error);

        return c.json(
          {
            success: false,
            error:
              "Failed to send developer applications to review. Please try again later.",
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
