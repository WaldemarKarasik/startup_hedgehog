import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  rating: SortOrderSchema.optional()
}).strict();
export const ReviewSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSumOrderByAggregateInput>;
export const ReviewSumOrderByAggregateInputObjectZodSchema = makeSchema();
