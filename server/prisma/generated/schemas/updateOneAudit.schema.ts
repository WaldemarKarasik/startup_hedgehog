import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditSelectObjectSchema as AuditSelectObjectSchema } from './objects/AuditSelect.schema';
import { AuditUpdateInputObjectSchema as AuditUpdateInputObjectSchema } from './objects/AuditUpdateInput.schema';
import { AuditUncheckedUpdateInputObjectSchema as AuditUncheckedUpdateInputObjectSchema } from './objects/AuditUncheckedUpdateInput.schema';
import { AuditWhereUniqueInputObjectSchema as AuditWhereUniqueInputObjectSchema } from './objects/AuditWhereUniqueInput.schema';

export const AuditUpdateOneSchema: z.ZodType<Prisma.AuditUpdateArgs> = z.object({ select: AuditSelectObjectSchema.optional(),  data: z.union([AuditUpdateInputObjectSchema, AuditUncheckedUpdateInputObjectSchema]), where: AuditWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuditUpdateArgs>;

export const AuditUpdateOneZodSchema = z.object({ select: AuditSelectObjectSchema.optional(),  data: z.union([AuditUpdateInputObjectSchema, AuditUncheckedUpdateInputObjectSchema]), where: AuditWhereUniqueInputObjectSchema }).strict();