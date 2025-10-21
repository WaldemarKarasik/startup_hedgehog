import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  dealId: z.string(),
  amount: z.number().optional(),
  platformFee: z.number().optional(),
  developerAmount: z.number().optional(),
  type: TransactionTypeSchema,
  status: TransactionStatusSchema.optional(),
  paymentId: z.string().optional().nullable(),
  paymentMethod: z.string().optional().nullable(),
  payoutId: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const TransactionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TransactionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUncheckedCreateInput>;
export const TransactionUncheckedCreateInputObjectZodSchema = makeSchema();
