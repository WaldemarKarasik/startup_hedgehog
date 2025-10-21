import * as z from 'zod';
export const TransactionGroupByResultSchema = z.array(z.object({
  id: z.string(),
  dealId: z.string(),
  amount: z.number(),
  platformFee: z.number(),
  developerAmount: z.number(),
  paymentId: z.string(),
  paymentMethod: z.string(),
  payoutId: z.string(),
  description: z.string(),
  metadata: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    dealId: z.number(),
    deal: z.number(),
    amount: z.number(),
    platformFee: z.number(),
    developerAmount: z.number(),
    type: z.number(),
    status: z.number(),
    paymentId: z.number(),
    paymentMethod: z.number(),
    payoutId: z.number(),
    description: z.number(),
    metadata: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable(),
    platformFee: z.number().nullable(),
    developerAmount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable(),
    platformFee: z.number().nullable(),
    developerAmount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    dealId: z.string().nullable(),
    amount: z.number().nullable(),
    platformFee: z.number().nullable(),
    developerAmount: z.number().nullable(),
    paymentId: z.string().nullable(),
    paymentMethod: z.string().nullable(),
    payoutId: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    dealId: z.string().nullable(),
    amount: z.number().nullable(),
    platformFee: z.number().nullable(),
    developerAmount: z.number().nullable(),
    paymentId: z.string().nullable(),
    paymentMethod: z.string().nullable(),
    payoutId: z.string().nullable(),
    description: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));