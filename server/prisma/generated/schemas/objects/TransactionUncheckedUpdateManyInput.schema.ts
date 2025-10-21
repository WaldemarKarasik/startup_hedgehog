import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { TransactionTypeSchema } from '../enums/TransactionType.schema';
import { EnumTransactionTypeFieldUpdateOperationsInputObjectSchema as EnumTransactionTypeFieldUpdateOperationsInputObjectSchema } from './EnumTransactionTypeFieldUpdateOperationsInput.schema';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema';
import { EnumTransactionStatusFieldUpdateOperationsInputObjectSchema as EnumTransactionStatusFieldUpdateOperationsInputObjectSchema } from './EnumTransactionStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dealId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  platformFee: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  developerAmount: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([TransactionTypeSchema, z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([TransactionStatusSchema, z.lazy(() => EnumTransactionStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  paymentMethod: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  payoutId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TransactionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUncheckedUpdateManyInput>;
export const TransactionUncheckedUpdateManyInputObjectZodSchema = makeSchema();
