import * as z from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id', 'authorId', 'targetUserId', 'productId', 'type', 'rating', 'title', 'comment', 'isVerifiedPurchase', 'isVisible', 'createdAt', 'updatedAt'])

export type ReviewScalarFieldEnum = z.infer<typeof ReviewScalarFieldEnumSchema>;