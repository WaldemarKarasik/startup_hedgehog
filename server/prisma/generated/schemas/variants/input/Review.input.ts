import * as z from 'zod';

import { ReviewTypeSchema } from '../../enums/ReviewType.schema';
// prettier-ignore
export const ReviewInputSchema = z.object({
    id: z.string(),
    authorId: z.string(),
    author: z.unknown(),
    targetUserId: z.string().optional().nullable(),
    targetUser: z.unknown().optional().nullable(),
    productId: z.string().optional().nullable(),
    product: z.unknown().optional().nullable(),
    type: ReviewTypeSchema,
    rating: z.number().int(),
    title: z.string().optional().nullable(),
    comment: z.string(),
    isVerifiedPurchase: z.boolean(),
    isVisible: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ReviewInputType = z.infer<typeof ReviewInputSchema>;
