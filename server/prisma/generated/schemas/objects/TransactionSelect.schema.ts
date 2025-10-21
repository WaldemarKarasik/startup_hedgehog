import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealArgsObjectSchema as DealArgsObjectSchema } from './DealArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  deal: z.union([z.boolean(), z.lazy(() => DealArgsObjectSchema)]).optional(),
  amount: z.boolean().optional(),
  platformFee: z.boolean().optional(),
  developerAmount: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  paymentId: z.boolean().optional(),
  paymentMethod: z.boolean().optional(),
  payoutId: z.boolean().optional(),
  description: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const TransactionSelectObjectSchema: z.ZodType<Prisma.TransactionSelect> = makeSchema() as unknown as z.ZodType<Prisma.TransactionSelect>;
export const TransactionSelectObjectZodSchema = makeSchema();
