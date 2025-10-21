import * as z from 'zod';
export const ReviewUpsertResultSchema = z.object({
  id: z.string(),
  authorId: z.string(),
  author: z.unknown(),
  targetUserId: z.string().optional(),
  targetUser: z.unknown().optional(),
  productId: z.string().optional(),
  product: z.unknown().optional(),
  type: z.unknown(),
  rating: z.number().int(),
  title: z.string().optional(),
  comment: z.string(),
  isVerifiedPurchase: z.boolean(),
  isVisible: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
});