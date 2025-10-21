import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  developerId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  tagline: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  fullDescription: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  demoUrl: SortOrderSchema.optional(),
  videoUrl: SortOrderSchema.optional(),
  githubUrl: SortOrderSchema.optional(),
  fixedPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  rejectionReason: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  views: SortOrderSchema.optional(),
  favorites: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  publishedAt: SortOrderSchema.optional()
}).strict();
export const ProductMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductMinOrderByAggregateInput>;
export const ProductMinOrderByAggregateInputObjectZodSchema = makeSchema();
