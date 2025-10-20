import { developerApplicationSchema as applicationSchema } from "server/src/routes/developer-applications";
import type z from "zod";

export type DeveloperApplicationForm = z.infer<typeof applicationSchema>;
export const developerApplicationSchema = applicationSchema;
