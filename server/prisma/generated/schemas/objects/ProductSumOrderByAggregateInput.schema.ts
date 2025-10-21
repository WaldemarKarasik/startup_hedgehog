import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fixedPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  views: SortOrderSchema.optional(),
  favorites: SortOrderSchema.optional()
}).strict();
export const ProductSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSumOrderByAggregateInput>;
export const ProductSumOrderByAggregateInputObjectZodSchema = makeSchema();
