import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditSelectObjectSchema as AuditSelectObjectSchema } from './objects/AuditSelect.schema';
import { AuditCreateManyInputObjectSchema as AuditCreateManyInputObjectSchema } from './objects/AuditCreateManyInput.schema';

export const AuditCreateManyAndReturnSchema: z.ZodType<Prisma.AuditCreateManyAndReturnArgs> = z.object({ select: AuditSelectObjectSchema.optional(), data: z.union([ AuditCreateManyInputObjectSchema, z.array(AuditCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AuditCreateManyAndReturnArgs>;

export const AuditCreateManyAndReturnZodSchema = z.object({ select: AuditSelectObjectSchema.optional(), data: z.union([ AuditCreateManyInputObjectSchema, z.array(AuditCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();