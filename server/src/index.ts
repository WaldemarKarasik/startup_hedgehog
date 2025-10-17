import { Hono } from "hono";
import { cors } from "hono/cors";
import { developerApplicationsRouter } from "./routes/developer-applications";

export const app = new Hono();

// Enable CORS for frontend
app.use("/*", cors({
  origin: ["http://localhost:3000", "http://localhost:3001"], // Add your frontend URLs
  credentials: true,
}));

// Health check
app.get("/", async (c) => {
  return c.json({ success: true, message: "StartupЁж API is running" });
});

// Routes
app.route("/api/developer-applications", developerApplicationsRouter);

export default {
  port: 5173,
  idleTimeout: 30,
  fetch(req: Request, server: any) {
    return app.fetch(req, server);
  },
};
