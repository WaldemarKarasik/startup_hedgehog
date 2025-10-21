import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema';
import { NestedEnumRevenueReportStatusWithAggregatesFilterObjectSchema as NestedEnumRevenueReportStatusWithAggregatesFilterObjectSchema } from './NestedEnumRevenueReportStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRevenueReportStatusFilterObjectSchema as NestedEnumRevenueReportStatusFilterObjectSchema } from './NestedEnumRevenueReportStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RevenueReportStatusSchema.optional(),
  in: RevenueReportStatusSchema.array().optional(),
  notIn: RevenueReportStatusSchema.array().optional(),
  not: z.union([RevenueReportStatusSchema, z.lazy(() => NestedEnumRevenueReportStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRevenueReportStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRevenueReportStatusFilterObjectSchema).optional()
}).strict();
export const EnumRevenueReportStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRevenueReportStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRevenueReportStatusWithAggregatesFilter>;
export const EnumRevenueReportStatusWithAggregatesFilterObjectZodSchema = makeSchema();
