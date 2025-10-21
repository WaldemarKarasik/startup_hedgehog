import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema'

const nestedenumtransactionstatusfilterSchema = z.object({
  equals: TransactionStatusSchema.optional(),
  in: TransactionStatusSchema.array().optional(),
  notIn: TransactionStatusSchema.array().optional(),
  not: z.union([TransactionStatusSchema, z.lazy(() => NestedEnumTransactionStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTransactionStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumTransactionStatusFilter> = nestedenumtransactionstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTransactionStatusFilter>;
export const NestedEnumTransactionStatusFilterObjectZodSchema = nestedenumtransactionstatusfilterSchema;
