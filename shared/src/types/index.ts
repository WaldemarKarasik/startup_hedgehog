import { developerApplicationSchema as applicationSchema } from "server/src/routes/developer-applications";
export {
  DeveloperApplicationStatuses,
  UserRoles,
  ProductCategories,
} from "server/src/types";
import type z from "zod";

export type DeveloperApplicationForm = z.infer<typeof applicationSchema>;
export const developerApplicationSchema = applicationSchema;
