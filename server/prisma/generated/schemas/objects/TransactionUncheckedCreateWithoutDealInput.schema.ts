import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const TransactionUncheckedCreateWithoutDealInputObjectSchema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUncheckedCreateWithoutDealInput>;
export const TransactionUncheckedCreateWithoutDealInputObjectZodSchema = makeSchema();
