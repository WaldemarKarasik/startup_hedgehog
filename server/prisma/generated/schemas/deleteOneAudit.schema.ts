import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditSelectObjectSchema as AuditSelectObjectSchema } from './objects/AuditSelect.schema';
import { AuditWhereUniqueInputObjectSchema as AuditWhereUniqueInputObjectSchema } from './objects/AuditWhereUniqueInput.schema';

export const AuditDeleteOneSchema: z.ZodType<Prisma.AuditDeleteArgs> = z.object({ select: AuditSelectObjectSchema.optional(),  where: AuditWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuditDeleteArgs>;

export const AuditDeleteOneZodSchema = z.object({ select: AuditSelectObjectSchema.optional(),  where: AuditWhereUniqueInputObjectSchema }).strict();