import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumReviewTypeWithAggregatesFilterObjectSchema as EnumReviewTypeWithAggregatesFilterObjectSchema } from './EnumReviewTypeWithAggregatesFilter.schema';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const reviewscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  targetUserId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  productId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumReviewTypeWithAggregatesFilterObjectSchema), ReviewTypeSchema]).optional(),
  rating: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  comment: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isVerifiedPurchase: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isVisible: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = reviewscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput>;
export const ReviewScalarWhereWithAggregatesInputObjectZodSchema = reviewscalarwherewithaggregatesinputSchema;
