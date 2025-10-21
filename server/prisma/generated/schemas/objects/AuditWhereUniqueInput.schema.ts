import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AuditWhereUniqueInputObjectSchema: z.ZodType<Prisma.AuditWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditWhereUniqueInput>;
export const AuditWhereUniqueInputObjectZodSchema = makeSchema();
