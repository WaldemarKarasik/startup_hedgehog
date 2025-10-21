import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema'

const nestedenumrevenuereportstatusfilterSchema = z.object({
  equals: RevenueReportStatusSchema.optional(),
  in: RevenueReportStatusSchema.array().optional(),
  notIn: RevenueReportStatusSchema.array().optional(),
  not: z.union([RevenueReportStatusSchema, z.lazy(() => NestedEnumRevenueReportStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRevenueReportStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumRevenueReportStatusFilter> = nestedenumrevenuereportstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRevenueReportStatusFilter>;
export const NestedEnumRevenueReportStatusFilterObjectZodSchema = nestedenumrevenuereportstatusfilterSchema;
