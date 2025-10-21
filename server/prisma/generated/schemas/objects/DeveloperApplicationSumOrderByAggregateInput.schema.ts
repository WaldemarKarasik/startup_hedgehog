import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  customizationPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional()
}).strict();
export const DeveloperApplicationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationSumOrderByAggregateInput>;
export const DeveloperApplicationSumOrderByAggregateInputObjectZodSchema = makeSchema();
