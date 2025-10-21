import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { NestedEnumTransactionStatusWithAggregatesFilterObjectSchema as NestedEnumTransactionStatusWithAggregatesFilterObjectSchema } from './NestedEnumTransactionStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTransactionStatusFilterObjectSchema as NestedEnumTransactionStatusFilterObjectSchema } from './NestedEnumTransactionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: TransactionStatusSchema.optional(),
  in: TransactionStatusSchema.array().optional(),
  notIn: TransactionStatusSchema.array().optional(),
  not: z.union([TransactionStatusSchema, z.lazy(() => NestedEnumTransactionStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTransactionStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTransactionStatusFilterObjectSchema).optional()
}).strict();
export const EnumTransactionStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTransactionStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTransactionStatusWithAggregatesFilter>;
export const EnumTransactionStatusWithAggregatesFilterObjectZodSchema = makeSchema();
