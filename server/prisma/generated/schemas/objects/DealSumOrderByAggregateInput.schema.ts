import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fixedPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional()
}).strict();
export const DealSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DealSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DealSumOrderByAggregateInput>;
export const DealSumOrderByAggregateInputObjectZodSchema = makeSchema();
