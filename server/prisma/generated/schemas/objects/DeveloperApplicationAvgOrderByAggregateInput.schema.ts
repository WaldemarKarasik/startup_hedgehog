import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  customizationPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional()
}).strict();
export const DeveloperApplicationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationAvgOrderByAggregateInput>;
export const DeveloperApplicationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
