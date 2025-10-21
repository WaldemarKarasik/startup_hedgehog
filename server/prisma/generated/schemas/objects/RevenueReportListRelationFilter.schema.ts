import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportWhereInputObjectSchema as RevenueReportWhereInputObjectSchema } from './RevenueReportWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RevenueReportWhereInputObjectSchema).optional(),
  some: z.lazy(() => RevenueReportWhereInputObjectSchema).optional(),
  none: z.lazy(() => RevenueReportWhereInputObjectSchema).optional()
}).strict();
export const RevenueReportListRelationFilterObjectSchema: z.ZodType<Prisma.RevenueReportListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportListRelationFilter>;
export const RevenueReportListRelationFilterObjectZodSchema = makeSchema();
