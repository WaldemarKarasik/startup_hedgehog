import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema'

const nestedenumreviewtypefilterSchema = z.object({
  equals: ReviewTypeSchema.optional(),
  in: ReviewTypeSchema.array().optional(),
  notIn: ReviewTypeSchema.array().optional(),
  not: z.union([ReviewTypeSchema, z.lazy(() => NestedEnumReviewTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumReviewTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumReviewTypeFilter> = nestedenumreviewtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumReviewTypeFilter>;
export const NestedEnumReviewTypeFilterObjectZodSchema = nestedenumreviewtypefilterSchema;
