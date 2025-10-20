import type z from "zod";
import type { developerApplicationSchema } from "../routes/developer-applications";
import { ApplicationStatus } from "../generated/prisma";

export type JwtPayload = {
  userId: string;
  role: string;
  exp: number;
};

export type DeveloperApplicationForm = z.infer<
  typeof developerApplicationSchema
>;

export const DeveloperApplicationStatuses = ApplicationStatus;
