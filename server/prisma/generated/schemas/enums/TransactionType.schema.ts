import * as z from 'zod';

export const TransactionTypeSchema = z.enum(['FIXED_PRICE', 'REVENUE_SHARE', 'REFUND', 'CHARGEBACK', 'PENALTY'])

export type TransactionType = z.infer<typeof TransactionTypeSchema>;