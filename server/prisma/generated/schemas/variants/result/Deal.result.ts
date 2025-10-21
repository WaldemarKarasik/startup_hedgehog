import * as z from 'zod';

import { DealStatusSchema } from '../../enums/DealStatus.schema';
// prettier-ignore
export const DealResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    product: z.unknown(),
    buyerId: z.string(),
    buyer: z.unknown(),
    developerId: z.string(),
    developer: z.unknown(),
    fixedPrice: z.number().nullable(),
    revenueSharePercent: z.number().int(),
    revenueShareDuration: z.string(),
    supportPeriod: z.number().int(),
    criticalSLA: z.number().int(),
    normalSLA: z.number().int(),
    hasRevenueShare: z.boolean(),
    paymentMethodId: z.string().nullable(),
    escrowPaymentId: z.string().nullable(),
    escrowExpiresAt: z.date().nullable(),
    status: DealStatusSchema,
    activatedAt: z.date().nullable(),
    pausedAt: z.date().nullable(),
    completedAt: z.date().nullable(),
    contract: z.unknown().nullable(),
    transactions: z.array(z.unknown()),
    revenueReports: z.array(z.unknown()),
    disputes: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DealResultType = z.infer<typeof DealResultSchema>;
