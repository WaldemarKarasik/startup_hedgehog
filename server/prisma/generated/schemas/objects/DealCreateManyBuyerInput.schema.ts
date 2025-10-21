import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealStatusSchema } from '../enums/DealStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  developerId: z.string(),
  fixedPrice: z.number().optional().nullable(),
  revenueSharePercent: z.number().int(),
  revenueShareDuration: z.string(),
  supportPeriod: z.number().int(),
  criticalSLA: z.number().int(),
  normalSLA: z.number().int(),
  hasRevenueShare: z.boolean().optional(),
  paymentMethodId: z.string().optional().nullable(),
  escrowPaymentId: z.string().optional().nullable(),
  escrowExpiresAt: z.coerce.date().optional().nullable(),
  status: DealStatusSchema.optional(),
  activatedAt: z.coerce.date().optional().nullable(),
  pausedAt: z.coerce.date().optional().nullable(),
  completedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DealCreateManyBuyerInputObjectSchema: z.ZodType<Prisma.DealCreateManyBuyerInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateManyBuyerInput>;
export const DealCreateManyBuyerInputObjectZodSchema = makeSchema();
