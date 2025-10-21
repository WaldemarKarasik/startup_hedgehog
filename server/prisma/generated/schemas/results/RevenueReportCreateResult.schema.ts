import * as z from 'zod';
export const RevenueReportCreateResultSchema = z.object({
  id: z.string(),
  dealId: z.string(),
  deal: z.unknown(),
  periodStart: z.date(),
  periodEnd: z.date().optional(),
  grossRevenue: z.number(),
  returns: z.number(),
  fees: z.number(),
  netRevenue: z.number(),
  revenueShareAmount: z.number(),
  proofUrls: z.array(z.string()),
  notes: z.string().optional(),
  status: z.unknown(),
  isAudited: z.boolean(),
  auditFlags: z.array(z.string()),
  submittedAt: z.date().optional(),
  verifiedAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});