import * as z from 'zod';
export const TransactionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  dealId: z.string(),
  deal: z.unknown(),
  amount: z.number(),
  platformFee: z.number(),
  developerAmount: z.number(),
  type: z.unknown(),
  status: z.unknown(),
  paymentId: z.string().optional(),
  paymentMethod: z.string().optional(),
  payoutId: z.string().optional(),
  description: z.string().optional(),
  metadata: z.unknown().optional(),
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