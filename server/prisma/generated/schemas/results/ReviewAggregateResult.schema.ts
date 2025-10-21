import * as z from 'zod';
export const ReviewAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    authorId: z.number(),
    author: z.number(),
    targetUserId: z.number(),
    targetUser: z.number(),
    productId: z.number(),
    product: z.number(),
    type: z.number(),
    rating: z.number(),
    title: z.number(),
    comment: z.number(),
    isVerifiedPurchase: z.number(),
    isVisible: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    rating: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    rating: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    authorId: z.string().nullable(),
    targetUserId: z.string().nullable(),
    productId: z.string().nullable(),
    rating: z.number().int().nullable(),
    title: z.string().nullable(),
    comment: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    authorId: z.string().nullable(),
    targetUserId: z.string().nullable(),
    productId: z.string().nullable(),
    rating: z.number().int().nullable(),
    title: z.string().nullable(),
    comment: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});