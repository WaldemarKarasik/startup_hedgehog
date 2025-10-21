import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  grossRevenue: z.literal(true).optional(),
  returns: z.literal(true).optional(),
  fees: z.literal(true).optional(),
  netRevenue: z.literal(true).optional(),
  revenueShareAmount: z.literal(true).optional()
}).strict();
export const RevenueReportAvgAggregateInputObjectSchema: z.ZodType<Prisma.RevenueReportAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportAvgAggregateInputType>;
export const RevenueReportAvgAggregateInputObjectZodSchema = makeSchema();
