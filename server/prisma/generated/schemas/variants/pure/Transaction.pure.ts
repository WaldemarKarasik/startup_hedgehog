import * as z from 'zod';

import { TransactionTypeSchema } from '../../enums/TransactionType.schema';
import { TransactionStatusSchema } from '../../enums/TransactionStatus.schema';
// prettier-ignore
export const TransactionModelSchema = z.object({
    id: z.string(),
    dealId: z.string(),
    deal: z.unknown(),
    amount: z.number(),
    platformFee: z.number(),
    developerAmount: z.number(),
    type: TransactionTypeSchema,
    status: TransactionStatusSchema,
    paymentId: z.string().nullable(),
    paymentMethod: z.string().nullable(),
    payoutId: z.string().nullable(),
    description: z.string().nullable(),
    metadata: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TransactionPureType = z.infer<typeof TransactionModelSchema>;
