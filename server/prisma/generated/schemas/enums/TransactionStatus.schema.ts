import * as z from 'zod';

export const TransactionStatusSchema = z.enum(['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED'])

export type TransactionStatus = z.infer<typeof TransactionStatusSchema>;