import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional(),
  platformFee: SortOrderSchema.optional(),
  developerAmount: SortOrderSchema.optional()
}).strict();
export const TransactionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TransactionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionSumOrderByAggregateInput>;
export const TransactionSumOrderByAggregateInputObjectZodSchema = makeSchema();
