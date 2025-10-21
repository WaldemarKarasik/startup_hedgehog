import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  authorId: SortOrderSchema.optional(),
  targetUserId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  isVerifiedPurchase: SortOrderSchema.optional(),
  isVisible: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ReviewMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinOrderByAggregateInput>;
export const ReviewMinOrderByAggregateInputObjectZodSchema = makeSchema();
