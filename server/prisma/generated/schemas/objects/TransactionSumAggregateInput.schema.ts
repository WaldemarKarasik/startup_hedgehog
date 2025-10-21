import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  amount: z.literal(true).optional(),
  platformFee: z.literal(true).optional(),
  developerAmount: z.literal(true).optional()
}).strict();
export const TransactionSumAggregateInputObjectSchema: z.ZodType<Prisma.TransactionSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TransactionSumAggregateInputType>;
export const TransactionSumAggregateInputObjectZodSchema = makeSchema();
