import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTransactionStatusFilterObjectSchema as NestedEnumTransactionStatusFilterObjectSchema } from './NestedEnumTransactionStatusFilter.schema'

const nestedenumtransactionstatuswithaggregatesfilterSchema = z.object({
  equals: TransactionStatusSchema.optional(),
  in: TransactionStatusSchema.array().optional(),
  notIn: TransactionStatusSchema.array().optional(),
  not: z.union([TransactionStatusSchema, z.lazy(() => NestedEnumTransactionStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTransactionStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTransactionStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumTransactionStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTransactionStatusWithAggregatesFilter> = nestedenumtransactionstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTransactionStatusWithAggregatesFilter>;
export const NestedEnumTransactionStatusWithAggregatesFilterObjectZodSchema = nestedenumtransactionstatuswithaggregatesfilterSchema;
