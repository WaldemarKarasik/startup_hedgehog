import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './DeveloperApplicationSelect.schema';
import { DeveloperApplicationIncludeObjectSchema as DeveloperApplicationIncludeObjectSchema } from './DeveloperApplicationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DeveloperApplicationSelectObjectSchema).optional(),
  include: z.lazy(() => DeveloperApplicationIncludeObjectSchema).optional()
}).strict();
export const DeveloperApplicationArgsObjectSchema = makeSchema();
export const DeveloperApplicationArgsObjectZodSchema = makeSchema();
