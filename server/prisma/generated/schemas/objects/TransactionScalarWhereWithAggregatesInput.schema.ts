import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { EnumTransactionTypeWithAggregatesFilterObjectSchema as EnumTransactionTypeWithAggregatesFilterObjectSchema } from './EnumTransactionTypeWithAggregatesFilter.schema';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { EnumTransactionStatusWithAggregatesFilterObjectSchema as EnumTransactionStatusWithAggregatesFilterObjectSchema } from './EnumTransactionStatusWithAggregatesFilter.schema';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const transactionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TransactionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  platformFee: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  developerAmount: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  type: z.union([z.lazy(() => EnumTransactionTypeWithAggregatesFilterObjectSchema), TransactionTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumTransactionStatusWithAggregatesFilterObjectSchema), TransactionStatusSchema]).optional(),
  paymentId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  paymentMethod: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  payoutId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TransactionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TransactionScalarWhereWithAggregatesInput> = transactionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TransactionScalarWhereWithAggregatesInput>;
export const TransactionScalarWhereWithAggregatesInputObjectZodSchema = transactionscalarwherewithaggregatesinputSchema;
