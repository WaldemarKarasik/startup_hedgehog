import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeSelectObjectSchema as DisputeSelectObjectSchema } from './DisputeSelect.schema';
import { DisputeIncludeObjectSchema as DisputeIncludeObjectSchema } from './DisputeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DisputeSelectObjectSchema).optional(),
  include: z.lazy(() => DisputeIncludeObjectSchema).optional()
}).strict();
export const DisputeArgsObjectSchema = makeSchema();
export const DisputeArgsObjectZodSchema = makeSchema();
