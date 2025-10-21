import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { NestedEnumTransactionStatusFilterObjectSchema as NestedEnumTransactionStatusFilterObjectSchema } from './NestedEnumTransactionStatusFilter.schema'

const makeSchema = () => z.object({
  equals: TransactionStatusSchema.optional(),
  in: TransactionStatusSchema.array().optional(),
  notIn: TransactionStatusSchema.array().optional(),
  not: z.union([TransactionStatusSchema, z.lazy(() => NestedEnumTransactionStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumTransactionStatusFilterObjectSchema: z.ZodType<Prisma.EnumTransactionStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTransactionStatusFilter>;
export const EnumTransactionStatusFilterObjectZodSchema = makeSchema();
