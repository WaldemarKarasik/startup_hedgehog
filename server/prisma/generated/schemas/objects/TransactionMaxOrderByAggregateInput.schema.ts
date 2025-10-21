import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  platformFee: SortOrderSchema.optional(),
  developerAmount: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional(),
  paymentMethod: SortOrderSchema.optional(),
  payoutId: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TransactionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TransactionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionMaxOrderByAggregateInput>;
export const TransactionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
