import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  targetUserId: z.string().optional().nullable(),
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
export const ReviewUncheckedCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateWithoutAuthorInput>;
export const ReviewUncheckedCreateWithoutAuthorInputObjectZodSchema = makeSchema();
