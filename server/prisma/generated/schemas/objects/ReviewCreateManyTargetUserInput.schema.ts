import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  authorId: z.string(),
  productId: z.string().optional().nullable(),
  type: ReviewTypeSchema,
  rating: z.number().int(),
  title: z.string().optional().nullable(),
  comment: z.string(),
  isVerifiedPurchase: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewCreateManyTargetUserInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyTargetUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyTargetUserInput>;
export const ReviewCreateManyTargetUserInputObjectZodSchema = makeSchema();
