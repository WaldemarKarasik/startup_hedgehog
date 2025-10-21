import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditSelectObjectSchema as AuditSelectObjectSchema } from './objects/AuditSelect.schema';
import { AuditUpdateManyMutationInputObjectSchema as AuditUpdateManyMutationInputObjectSchema } from './objects/AuditUpdateManyMutationInput.schema';
import { AuditWhereInputObjectSchema as AuditWhereInputObjectSchema } from './objects/AuditWhereInput.schema';

export const AuditUpdateManyAndReturnSchema: z.ZodType<Prisma.AuditUpdateManyAndReturnArgs> = z.object({ select: AuditSelectObjectSchema.optional(), data: AuditUpdateManyMutationInputObjectSchema, where: AuditWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuditUpdateManyAndReturnArgs>;

export const AuditUpdateManyAndReturnZodSchema = z.object({ select: AuditSelectObjectSchema.optional(), data: AuditUpdateManyMutationInputObjectSchema, where: AuditWhereInputObjectSchema.optional() }).strict();