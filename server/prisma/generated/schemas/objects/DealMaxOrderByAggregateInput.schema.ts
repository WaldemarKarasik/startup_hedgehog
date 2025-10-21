import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  buyerId: SortOrderSchema.optional(),
  developerId: SortOrderSchema.optional(),
  fixedPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  hasRevenueShare: SortOrderSchema.optional(),
  paymentMethodId: SortOrderSchema.optional(),
  escrowPaymentId: SortOrderSchema.optional(),
  escrowExpiresAt: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  activatedAt: SortOrderSchema.optional(),
  pausedAt: SortOrderSchema.optional(),
  completedAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DealMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DealMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DealMaxOrderByAggregateInput>;
export const DealMaxOrderByAggregateInputObjectZodSchema = makeSchema();
