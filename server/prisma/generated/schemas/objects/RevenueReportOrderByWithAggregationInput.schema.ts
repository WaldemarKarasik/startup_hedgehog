import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RevenueReportCountOrderByAggregateInputObjectSchema as RevenueReportCountOrderByAggregateInputObjectSchema } from './RevenueReportCountOrderByAggregateInput.schema';
import { RevenueReportAvgOrderByAggregateInputObjectSchema as RevenueReportAvgOrderByAggregateInputObjectSchema } from './RevenueReportAvgOrderByAggregateInput.schema';
import { RevenueReportMaxOrderByAggregateInputObjectSchema as RevenueReportMaxOrderByAggregateInputObjectSchema } from './RevenueReportMaxOrderByAggregateInput.schema';
import { RevenueReportMinOrderByAggregateInputObjectSchema as RevenueReportMinOrderByAggregateInputObjectSchema } from './RevenueReportMinOrderByAggregateInput.schema';
import { RevenueReportSumOrderByAggregateInputObjectSchema as RevenueReportSumOrderByAggregateInputObjectSchema } from './RevenueReportSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  periodStart: SortOrderSchema.optional(),
  periodEnd: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  grossRevenue: SortOrderSchema.optional(),
  returns: SortOrderSchema.optional(),
  fees: SortOrderSchema.optional(),
  netRevenue: SortOrderSchema.optional(),
  revenueShareAmount: SortOrderSchema.optional(),
  proofUrls: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  isAudited: SortOrderSchema.optional(),
  auditFlags: SortOrderSchema.optional(),
  submittedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verifiedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => RevenueReportCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RevenueReportAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RevenueReportMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RevenueReportMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RevenueReportSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RevenueReportOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RevenueReportOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportOrderByWithAggregationInput>;
export const RevenueReportOrderByWithAggregationInputObjectZodSchema = makeSchema();
