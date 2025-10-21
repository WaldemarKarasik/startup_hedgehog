import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCountOutputTypeSelectObjectSchema as DealCountOutputTypeSelectObjectSchema } from './DealCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DealCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DealCountOutputTypeArgsObjectSchema = makeSchema();
export const DealCountOutputTypeArgsObjectZodSchema = makeSchema();
