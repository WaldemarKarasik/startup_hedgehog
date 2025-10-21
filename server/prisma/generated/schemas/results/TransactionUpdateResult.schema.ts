import * as z from 'zod';
export const TransactionUpdateResultSchema = z.nullable(z.object({
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
}));