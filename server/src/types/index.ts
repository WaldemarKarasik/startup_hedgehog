import type z from "zod";
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

export const DeveloperApplicationStatuses = ApplicationStatus;

export const UserRoles = UserRole;

export const ProductCategories = ProductCategory;
