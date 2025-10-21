import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const AuditUpdateflagsInputObjectSchema: z.ZodType<Prisma.AuditUpdateflagsInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditUpdateflagsInput>;
export const AuditUpdateflagsInputObjectZodSchema = makeSchema();
