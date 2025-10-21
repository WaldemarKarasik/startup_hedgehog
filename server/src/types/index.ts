import type z from "zod";
import type { developerApplicationSchema } from "../routes/developer-applications";
import {
  ApplicationStatus,
  ProductCategory,
  UserRole,
} from "../generated/prisma";

export type JwtPayload = {
  userId: string;
  role: UserRole;
  exp: number;
};

export type DeveloperApplicationForm = z.infer<
  typeof developerApplicationSchema
>;

export const DeveloperApplicationStatuses = ApplicationStatus;

export const UserRoles = UserRole;

export const ProductCategories = ProductCategory;
