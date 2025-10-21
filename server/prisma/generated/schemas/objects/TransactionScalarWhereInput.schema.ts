import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { EnumTransactionTypeFilterObjectSchema as EnumTransactionTypeFilterObjectSchema } from './EnumTransactionTypeFilter.schema';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { EnumTransactionStatusFilterObjectSchema as EnumTransactionStatusFilterObjectSchema } from './EnumTransactionStatusFilter.schema';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const transactionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TransactionScalarWhereInputObjectSchema), z.lazy(() => TransactionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TransactionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TransactionScalarWhereInputObjectSchema), z.lazy(() => TransactionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  platformFee: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  developerAmount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  type: z.union([z.lazy(() => EnumTransactionTypeFilterObjectSchema), TransactionTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumTransactionStatusFilterObjectSchema), TransactionStatusSchema]).optional(),
  paymentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  paymentMethod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  payoutId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TransactionScalarWhereInputObjectSchema: z.ZodType<Prisma.TransactionScalarWhereInput> = transactionscalarwhereinputSchema as unknown as z.ZodType<Prisma.TransactionScalarWhereInput>;
export const TransactionScalarWhereInputObjectZodSchema = transactionscalarwhereinputSchema;
