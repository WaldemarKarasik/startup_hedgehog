import type z from "zod";
import type { developerApplicationSchema } from "../routes/developer-applications";

export type JwtPayload = {
  userId: string;
  role: string;
  exp: number;
};

export type DeveloperApplicationForm = z.infer<
  typeof developerApplicationSchema
>;
