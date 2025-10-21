import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const AuditCreateflagsInputObjectSchema: z.ZodType<Prisma.AuditCreateflagsInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditCreateflagsInput>;
export const AuditCreateflagsInputObjectZodSchema = makeSchema();
