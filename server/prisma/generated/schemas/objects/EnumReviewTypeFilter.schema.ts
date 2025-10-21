import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
import { NestedEnumReviewTypeFilterObjectSchema as NestedEnumReviewTypeFilterObjectSchema } from './NestedEnumReviewTypeFilter.schema'

const makeSchema = () => z.object({
  equals: ReviewTypeSchema.optional(),
  in: ReviewTypeSchema.array().optional(),
  notIn: ReviewTypeSchema.array().optional(),
  not: z.union([ReviewTypeSchema, z.lazy(() => NestedEnumReviewTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumReviewTypeFilterObjectSchema: z.ZodType<Prisma.EnumReviewTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumReviewTypeFilter>;
export const EnumReviewTypeFilterObjectZodSchema = makeSchema();
