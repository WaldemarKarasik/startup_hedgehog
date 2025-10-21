import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumReviewTypeFilterObjectSchema as EnumReviewTypeFilterObjectSchema } from './EnumReviewTypeFilter.schema';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { ProductNullableScalarRelationFilterObjectSchema as ProductNullableScalarRelationFilterObjectSchema } from './ProductNullableScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const reviewwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewWhereInputObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  targetUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  productId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumReviewTypeFilterObjectSchema), ReviewTypeSchema]).optional(),
  rating: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  comment: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isVerifiedPurchase: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isVisible: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  author: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  targetUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  product: z.union([z.lazy(() => ProductNullableScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const ReviewWhereInputObjectSchema: z.ZodType<Prisma.ReviewWhereInput> = reviewwhereinputSchema as unknown as z.ZodType<Prisma.ReviewWhereInput>;
export const ReviewWhereInputObjectZodSchema = reviewwhereinputSchema;
