import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditSelectObjectSchema as AuditSelectObjectSchema } from './objects/AuditSelect.schema';
import { AuditWhereUniqueInputObjectSchema as AuditWhereUniqueInputObjectSchema } from './objects/AuditWhereUniqueInput.schema';
import { AuditCreateInputObjectSchema as AuditCreateInputObjectSchema } from './objects/AuditCreateInput.schema';
import { AuditUncheckedCreateInputObjectSchema as AuditUncheckedCreateInputObjectSchema } from './objects/AuditUncheckedCreateInput.schema';
import { AuditUpdateInputObjectSchema as AuditUpdateInputObjectSchema } from './objects/AuditUpdateInput.schema';
import { AuditUncheckedUpdateInputObjectSchema as AuditUncheckedUpdateInputObjectSchema } from './objects/AuditUncheckedUpdateInput.schema';

export const AuditUpsertOneSchema: z.ZodType<Prisma.AuditUpsertArgs> = z.object({ select: AuditSelectObjectSchema.optional(),  where: AuditWhereUniqueInputObjectSchema, create: z.union([ AuditCreateInputObjectSchema, AuditUncheckedCreateInputObjectSchema ]), update: z.union([ AuditUpdateInputObjectSchema, AuditUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AuditUpsertArgs>;

export const AuditUpsertOneZodSchema = z.object({ select: AuditSelectObjectSchema.optional(),  where: AuditWhereUniqueInputObjectSchema, create: z.union([ AuditCreateInputObjectSchema, AuditUncheckedCreateInputObjectSchema ]), update: z.union([ AuditUpdateInputObjectSchema, AuditUncheckedUpdateInputObjectSchema ]) }).strict();