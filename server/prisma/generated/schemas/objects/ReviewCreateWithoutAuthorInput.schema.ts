import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
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
  updatedAt: z.coerce.date().optional(),
  targetUser: z.lazy(() => UserCreateNestedOneWithoutReceivedReviewsInputObjectSchema).optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutReviewsInputObjectSchema).optional()
}).strict();
export const ReviewCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutAuthorInput>;
export const ReviewCreateWithoutAuthorInputObjectZodSchema = makeSchema();
