import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionStatusSchema } from '../enums/TransactionStatus.schema'

const makeSchema = () => z.object({
  set: TransactionStatusSchema.optional()
}).strict();
export const EnumTransactionStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTransactionStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTransactionStatusFieldUpdateOperationsInput>;
export const EnumTransactionStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
