import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  dealId: z.literal(true).optional(),
  periodStart: z.literal(true).optional(),
  periodEnd: z.literal(true).optional(),
  grossRevenue: z.literal(true).optional(),
  returns: z.literal(true).optional(),
  fees: z.literal(true).optional(),
  netRevenue: z.literal(true).optional(),
  revenueShareAmount: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  status: z.literal(true).optional(),
  isAudited: z.literal(true).optional(),
  submittedAt: z.literal(true).optional(),
  verifiedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const RevenueReportMaxAggregateInputObjectSchema: z.ZodType<Prisma.RevenueReportMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportMaxAggregateInputType>;
export const RevenueReportMaxAggregateInputObjectZodSchema = makeSchema();
