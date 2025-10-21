import * as z from 'zod';
export const RevenueReportFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});