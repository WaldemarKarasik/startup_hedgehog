import type z from "zod";
import {
  ApplicationStatus,
  Prisma,
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
export type ProductWithDeveloperInfo = Prisma.ProductGetPayload<{
  include: {
    developer: {
      select: {
        firstName: true;
        lastName: true;
        avatar: true;
        rating: true;
      };
    };
  };
}>;
