import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditCreateManyInputObjectSchema as AuditCreateManyInputObjectSchema } from './objects/AuditCreateManyInput.schema';

export const AuditCreateManySchema: z.ZodType<Prisma.AuditCreateManyArgs> = z.object({ data: z.union([ AuditCreateManyInputObjectSchema, z.array(AuditCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AuditCreateManyArgs>;

export const AuditCreateManyZodSchema = z.object({ data: z.union([ AuditCreateManyInputObjectSchema, z.array(AuditCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();