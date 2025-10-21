import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionCreateManyDealInputObjectSchema as TransactionCreateManyDealInputObjectSchema } from './TransactionCreateManyDealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TransactionCreateManyDealInputObjectSchema), z.lazy(() => TransactionCreateManyDealInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TransactionCreateManyDealInputEnvelopeObjectSchema: z.ZodType<Prisma.TransactionCreateManyDealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TransactionCreateManyDealInputEnvelope>;
export const TransactionCreateManyDealInputEnvelopeObjectZodSchema = makeSchema();
