import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  telegram: SortOrderSchema.optional(),
  productName: SortOrderSchema.optional(),
  productDescription: SortOrderSchema.optional(),
  customizationPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  githubUrl: SortOrderSchema.optional(),
  demoUrl: SortOrderSchema.optional(),
  videoUrl: SortOrderSchema.optional(),
  hasUsers: SortOrderSchema.optional(),
  userCount: SortOrderSchema.optional(),
  customizationReady: SortOrderSchema.optional(),
  targetBusinesses: SortOrderSchema.optional(),
  portfolio: SortOrderSchema.optional(),
  additionalInfo: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  reviewNotes: SortOrderSchema.optional(),
  reviewedBy: SortOrderSchema.optional(),
  reviewedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DeveloperApplicationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationCountOrderByAggregateInput>;
export const DeveloperApplicationCountOrderByAggregateInputObjectZodSchema = makeSchema();
