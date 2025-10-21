import * as z from 'zod';

import { TransactionTypeSchema } from '../../enums/TransactionType.schema';
import { TransactionStatusSchema } from '../../enums/TransactionStatus.schema';
// prettier-ignore
export const TransactionInputSchema = z.object({
    id: z.string(),
    dealId: z.string(),
    deal: z.unknown(),
    amount: z.number(),
    platformFee: z.number(),
    developerAmount: z.number(),
    type: TransactionTypeSchema,
    status: TransactionStatusSchema,
    paymentId: z.string().optional().nullable(),
    paymentMethod: z.string().optional().nullable(),
    payoutId: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    metadata: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TransactionInputType = z.infer<typeof TransactionInputSchema>;
