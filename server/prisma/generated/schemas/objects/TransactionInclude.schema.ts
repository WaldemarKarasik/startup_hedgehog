import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealArgsObjectSchema as DealArgsObjectSchema } from './DealArgs.schema'

const makeSchema = () => z.object({
  deal: z.union([z.boolean(), z.lazy(() => DealArgsObjectSchema)]).optional()
}).strict();
export const TransactionIncludeObjectSchema: z.ZodType<Prisma.TransactionInclude> = makeSchema() as unknown as z.ZodType<Prisma.TransactionInclude>;
export const TransactionIncludeObjectZodSchema = makeSchema();
