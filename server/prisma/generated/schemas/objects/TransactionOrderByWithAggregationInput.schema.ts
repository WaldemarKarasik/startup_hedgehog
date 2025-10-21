import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TransactionCountOrderByAggregateInputObjectSchema as TransactionCountOrderByAggregateInputObjectSchema } from './TransactionCountOrderByAggregateInput.schema';
import { TransactionAvgOrderByAggregateInputObjectSchema as TransactionAvgOrderByAggregateInputObjectSchema } from './TransactionAvgOrderByAggregateInput.schema';
import { TransactionMaxOrderByAggregateInputObjectSchema as TransactionMaxOrderByAggregateInputObjectSchema } from './TransactionMaxOrderByAggregateInput.schema';
import { TransactionMinOrderByAggregateInputObjectSchema as TransactionMinOrderByAggregateInputObjectSchema } from './TransactionMinOrderByAggregateInput.schema';
import { TransactionSumOrderByAggregateInputObjectSchema as TransactionSumOrderByAggregateInputObjectSchema } from './TransactionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  platformFee: SortOrderSchema.optional(),
  developerAmount: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  paymentMethod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  payoutId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TransactionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TransactionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TransactionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TransactionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TransactionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TransactionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TransactionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionOrderByWithAggregationInput>;
export const TransactionOrderByWithAggregationInputObjectZodSchema = makeSchema();
