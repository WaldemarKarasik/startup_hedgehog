import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditSelectObjectSchema as AuditSelectObjectSchema } from './AuditSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AuditSelectObjectSchema).optional()
}).strict();
export const AuditArgsObjectSchema = makeSchema();
export const AuditArgsObjectZodSchema = makeSchema();
