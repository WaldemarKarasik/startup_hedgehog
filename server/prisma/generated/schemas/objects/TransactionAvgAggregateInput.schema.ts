import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  amount: z.literal(true).optional(),
  platformFee: z.literal(true).optional(),
  developerAmount: z.literal(true).optional()
}).strict();
export const TransactionAvgAggregateInputObjectSchema: z.ZodType<Prisma.TransactionAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TransactionAvgAggregateInputType>;
export const TransactionAvgAggregateInputObjectZodSchema = makeSchema();
