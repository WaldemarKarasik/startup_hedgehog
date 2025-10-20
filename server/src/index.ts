import { Hono } from "hono";
import { cors } from "hono/cors";
import { authRoutes } from "./routes/auth";
import { developerApplicationsRouter } from "./routes/developer-applications";

export const app = new Hono()
  .use(
    "/*",
    cors({
      origin: ["http://localhost:3000", "http://localhost:3001"], // Add your frontend URLs
      credentials: true,
    })
  )
  .get("/", async (c) => {
    return c.json({ success: true, message: "StartupЁж API is running" });
  })
  .route("/api/auth", authRoutes)
  .route("/api/developerApplication", developerApplicationsRouter);

// Enable CORS for frontend

// Health check

// Routes

// Export AppType for RPC client (must be after all routes are defined)
export type AppType = typeof app;
export default {
  port: 5173,
  idleTimeout: 30,
  fetch(req: Request, server: any) {
    return app.fetch(req, server);
  },
};
