import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumReviewTypeFilterObjectSchema as NestedEnumReviewTypeFilterObjectSchema } from './NestedEnumReviewTypeFilter.schema'

const nestedenumreviewtypewithaggregatesfilterSchema = z.object({
  equals: ReviewTypeSchema.optional(),
  in: ReviewTypeSchema.array().optional(),
  notIn: ReviewTypeSchema.array().optional(),
  not: z.union([ReviewTypeSchema, z.lazy(() => NestedEnumReviewTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumReviewTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumReviewTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumReviewTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumReviewTypeWithAggregatesFilter> = nestedenumreviewtypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumReviewTypeWithAggregatesFilter>;
export const NestedEnumReviewTypeWithAggregatesFilterObjectZodSchema = nestedenumreviewtypewithaggregatesfilterSchema;
