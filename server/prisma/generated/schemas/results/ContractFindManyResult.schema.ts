import * as z from 'zod';
export const ContractFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  dealId: z.string(),
  deal: z.unknown(),
  templateVersion: z.string(),
  content: z.string(),
  pdfUrl: z.string().optional(),
  fixedPrice: z.number().optional(),
  revenueSharePercent: z.number().int(),
  revenueShareDuration: z.string(),
  supportPeriod: z.number().int(),
  criticalSLA: z.number().int(),
  normalSLA: z.number().int(),
  signatures: z.unknown(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  signedAt: z.date().optional()
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