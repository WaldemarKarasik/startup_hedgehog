import * as z from 'zod';

import { DealStatusSchema } from '../../enums/DealStatus.schema';
// prettier-ignore
export const DealInputSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    buyerId: z.string(),
    buyer: z.unknown(),
    developerId: z.string(),
    developer: z.unknown(),
    fixedPrice: z.number().optional().nullable(),
    revenueSharePercent: z.number().int(),
    revenueShareDuration: z.string(),
    supportPeriod: z.number().int(),
    criticalSLA: z.number().int(),
    normalSLA: z.number().int(),
    hasRevenueShare: z.boolean(),
    paymentMethodId: z.string().optional().nullable(),
    escrowPaymentId: z.string().optional().nullable(),
    escrowExpiresAt: z.date().optional().nullable(),
    status: DealStatusSchema,
    activatedAt: z.date().optional().nullable(),
    pausedAt: z.date().optional().nullable(),
    completedAt: z.date().optional().nullable(),
    contract: z.unknown().optional().nullable(),
    transactions: z.array(z.unknown()),
    revenueReports: z.array(z.unknown()),
    disputes: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DealInputType = z.infer<typeof DealInputSchema>;
