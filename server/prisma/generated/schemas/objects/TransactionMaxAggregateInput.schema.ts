import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  dealId: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  platformFee: z.literal(true).optional(),
  developerAmount: z.literal(true).optional(),
  type: z.literal(true).optional(),
  status: z.literal(true).optional(),
  paymentId: z.literal(true).optional(),
  paymentMethod: z.literal(true).optional(),
  payoutId: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const TransactionMaxAggregateInputObjectSchema: z.ZodType<Prisma.TransactionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TransactionMaxAggregateInputType>;
export const TransactionMaxAggregateInputObjectZodSchema = makeSchema();
