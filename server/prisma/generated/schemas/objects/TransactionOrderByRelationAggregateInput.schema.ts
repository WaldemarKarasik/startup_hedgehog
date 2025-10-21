import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TransactionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TransactionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionOrderByRelationAggregateInput>;
export const TransactionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
