import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractSelectObjectSchema as ContractSelectObjectSchema } from './ContractSelect.schema';
import { ContractIncludeObjectSchema as ContractIncludeObjectSchema } from './ContractInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ContractSelectObjectSchema).optional(),
  include: z.lazy(() => ContractIncludeObjectSchema).optional()
}).strict();
export const ContractArgsObjectSchema = makeSchema();
export const ContractArgsObjectZodSchema = makeSchema();
