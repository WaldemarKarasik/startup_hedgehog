import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealArgsObjectSchema as DealArgsObjectSchema } from './DealArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  deal: z.union([z.boolean(), z.lazy(() => DealArgsObjectSchema)]).optional(),
  periodStart: z.boolean().optional(),
  periodEnd: z.boolean().optional(),
  grossRevenue: z.boolean().optional(),
  returns: z.boolean().optional(),
  fees: z.boolean().optional(),
  netRevenue: z.boolean().optional(),
  revenueShareAmount: z.boolean().optional(),
  proofUrls: z.boolean().optional(),
  notes: z.boolean().optional(),
  status: z.boolean().optional(),
  isAudited: z.boolean().optional(),
  auditFlags: z.boolean().optional(),
  submittedAt: z.boolean().optional(),
  verifiedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const RevenueReportSelectObjectSchema: z.ZodType<Prisma.RevenueReportSelect> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportSelect>;
export const RevenueReportSelectObjectZodSchema = makeSchema();
