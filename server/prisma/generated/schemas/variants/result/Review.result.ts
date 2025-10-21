import * as z from 'zod';

import { ReviewTypeSchema } from '../../enums/ReviewType.schema';
// prettier-ignore
export const ReviewResultSchema = z.object({
    id: z.string(),
    authorId: z.string(),
    author: z.unknown(),
    targetUserId: z.string().nullable(),
    targetUser: z.unknown().nullable(),
    productId: z.string().nullable(),
    product: z.unknown().nullable(),
    type: ReviewTypeSchema,
    rating: z.number().int(),
    title: z.string().nullable(),
    comment: z.string(),
    isVerifiedPurchase: z.boolean(),
    isVisible: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ReviewResultType = z.infer<typeof ReviewResultSchema>;
