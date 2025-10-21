import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditWhereInputObjectSchema as AuditWhereInputObjectSchema } from './objects/AuditWhereInput.schema';

export const AuditDeleteManySchema: z.ZodType<Prisma.AuditDeleteManyArgs> = z.object({ where: AuditWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuditDeleteManyArgs>;

export const AuditDeleteManyZodSchema = z.object({ where: AuditWhereInputObjectSchema.optional() }).strict();