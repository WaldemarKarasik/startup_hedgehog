import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional(),
  platformFee: SortOrderSchema.optional(),
  developerAmount: SortOrderSchema.optional()
}).strict();
export const TransactionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TransactionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionAvgOrderByAggregateInput>;
export const TransactionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
