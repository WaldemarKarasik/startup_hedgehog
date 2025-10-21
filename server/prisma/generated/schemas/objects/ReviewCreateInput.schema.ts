import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema as UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';
import { UserCreateNestedOneWithoutReceivedReviewsInputObjectSchema as UserCreateNestedOneWithoutReceivedReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReceivedReviewsInput.schema';
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema as ProductCreateNestedOneWithoutReviewsInputObjectSchema } from './ProductCreateNestedOneWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: ReviewTypeSchema,
  rating: z.number().int(),
  title: z.string().optional().nullable(),
  comment: z.string(),
  isVerifiedPurchase: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  targetUser: z.lazy(() => UserCreateNestedOneWithoutReceivedReviewsInputObjectSchema).optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutReviewsInputObjectSchema).optional()
}).strict();
export const ReviewCreateInputObjectSchema: z.ZodType<Prisma.ReviewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateInput>;
export const ReviewCreateInputObjectZodSchema = makeSchema();
