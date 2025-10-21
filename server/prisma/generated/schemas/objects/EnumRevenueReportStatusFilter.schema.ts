import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema';
import { NestedEnumRevenueReportStatusFilterObjectSchema as NestedEnumRevenueReportStatusFilterObjectSchema } from './NestedEnumRevenueReportStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RevenueReportStatusSchema.optional(),
  in: RevenueReportStatusSchema.array().optional(),
  notIn: RevenueReportStatusSchema.array().optional(),
  not: z.union([RevenueReportStatusSchema, z.lazy(() => NestedEnumRevenueReportStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumRevenueReportStatusFilterObjectSchema: z.ZodType<Prisma.EnumRevenueReportStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRevenueReportStatusFilter>;
export const EnumRevenueReportStatusFilterObjectZodSchema = makeSchema();
