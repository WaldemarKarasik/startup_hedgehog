import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './DealSelect.schema';
import { DealIncludeObjectSchema as DealIncludeObjectSchema } from './DealInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DealSelectObjectSchema).optional(),
  include: z.lazy(() => DealIncludeObjectSchema).optional()
}).strict();
export const DealArgsObjectSchema = makeSchema();
export const DealArgsObjectZodSchema = makeSchema();
