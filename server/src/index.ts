import { Hono } from "hono";
import { cors } from "hono/cors";

export const app = new Hono<{}>().get("/", async (c) => {
  return c.json({ success: true });
});
export default {
  port: 5173,
  idleTimeout: 30,
  fetch(req: Request, server: any) {
    return app.fetch(req, server);
  },
};
