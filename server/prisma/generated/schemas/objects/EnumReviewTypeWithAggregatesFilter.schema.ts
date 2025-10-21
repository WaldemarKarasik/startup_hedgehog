import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
import { NestedEnumReviewTypeWithAggregatesFilterObjectSchema as NestedEnumReviewTypeWithAggregatesFilterObjectSchema } from './NestedEnumReviewTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReviewTypeFilterObjectSchema as NestedEnumReviewTypeFilterObjectSchema } from './NestedEnumReviewTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ReviewTypeSchema.optional(),
  in: ReviewTypeSchema.array().optional(),
  notIn: ReviewTypeSchema.array().optional(),
  not: z.union([ReviewTypeSchema, z.lazy(() => NestedEnumReviewTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReviewTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReviewTypeFilterObjectSchema).optional()
}).strict();
export const EnumReviewTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumReviewTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReviewTypeWithAggregatesFilter>;
export const EnumReviewTypeWithAggregatesFilterObjectZodSchema = makeSchema();
