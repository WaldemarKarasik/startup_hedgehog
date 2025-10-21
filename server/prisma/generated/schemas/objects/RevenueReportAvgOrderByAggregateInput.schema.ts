import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  grossRevenue: SortOrderSchema.optional(),
  returns: SortOrderSchema.optional(),
  fees: SortOrderSchema.optional(),
  netRevenue: SortOrderSchema.optional(),
  revenueShareAmount: SortOrderSchema.optional()
}).strict();
export const RevenueReportAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RevenueReportAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportAvgOrderByAggregateInput>;
export const RevenueReportAvgOrderByAggregateInputObjectZodSchema = makeSchema();
