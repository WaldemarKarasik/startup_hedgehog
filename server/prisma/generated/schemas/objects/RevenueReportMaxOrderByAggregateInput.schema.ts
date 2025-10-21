import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  periodStart: SortOrderSchema.optional(),
  periodEnd: SortOrderSchema.optional(),
  grossRevenue: SortOrderSchema.optional(),
  returns: SortOrderSchema.optional(),
  fees: SortOrderSchema.optional(),
  netRevenue: SortOrderSchema.optional(),
  revenueShareAmount: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  isAudited: SortOrderSchema.optional(),
  submittedAt: SortOrderSchema.optional(),
  verifiedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const RevenueReportMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RevenueReportMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportMaxOrderByAggregateInput>;
export const RevenueReportMaxOrderByAggregateInputObjectZodSchema = makeSchema();
