import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  buyerId: z.literal(true).optional(),
  developerId: z.literal(true).optional(),
  fixedPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional(),
  revenueShareDuration: z.literal(true).optional(),
  supportPeriod: z.literal(true).optional(),
  criticalSLA: z.literal(true).optional(),
  normalSLA: z.literal(true).optional(),
  hasRevenueShare: z.literal(true).optional(),
  paymentMethodId: z.literal(true).optional(),
  escrowPaymentId: z.literal(true).optional(),
  escrowExpiresAt: z.literal(true).optional(),
  status: z.literal(true).optional(),
  activatedAt: z.literal(true).optional(),
  pausedAt: z.literal(true).optional(),
  completedAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DealCountAggregateInputObjectSchema: z.ZodType<Prisma.DealCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DealCountAggregateInputType>;
export const DealCountAggregateInputObjectZodSchema = makeSchema();
