import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  authorId: z.literal(true).optional(),
  targetUserId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  title: z.literal(true).optional(),
  comment: z.literal(true).optional(),
  isVerifiedPurchase: z.literal(true).optional(),
  isVisible: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ReviewMinAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinAggregateInputType>;
export const ReviewMinAggregateInputObjectZodSchema = makeSchema();
