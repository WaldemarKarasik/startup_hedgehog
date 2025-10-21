import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  avatar: SortOrderSchema.optional(),
  bio: SortOrderSchema.optional(),
  userType: SortOrderSchema.optional(),
  legalName: SortOrderSchema.optional(),
  inn: SortOrderSchema.optional(),
  legalBasis: SortOrderSchema.optional(),
  payoutMethod: SortOrderSchema.optional(),
  reputation: SortOrderSchema.optional(),
  trustScore: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  reviewCount: SortOrderSchema.optional(),
  isVerified: SortOrderSchema.optional(),
  isSuspended: SortOrderSchema.optional(),
  suspendedReason: SortOrderSchema.optional(),
  lastActiveAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const UserMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserMaxOrderByAggregateInput>;
export const UserMaxOrderByAggregateInputObjectZodSchema = makeSchema();
