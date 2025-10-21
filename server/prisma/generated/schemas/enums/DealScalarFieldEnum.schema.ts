import * as z from 'zod';

export const DealScalarFieldEnumSchema = z.enum(['id', 'productId', 'buyerId', 'developerId', 'fixedPrice', 'revenueSharePercent', 'revenueShareDuration', 'supportPeriod', 'criticalSLA', 'normalSLA', 'hasRevenueShare', 'paymentMethodId', 'escrowPaymentId', 'escrowExpiresAt', 'status', 'activatedAt', 'pausedAt', 'completedAt', 'createdAt', 'updatedAt'])

export type DealScalarFieldEnum = z.infer<typeof DealScalarFieldEnumSchema>;