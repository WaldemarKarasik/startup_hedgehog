import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditUpdateManyMutationInputObjectSchema as AuditUpdateManyMutationInputObjectSchema } from './objects/AuditUpdateManyMutationInput.schema';
import { AuditWhereInputObjectSchema as AuditWhereInputObjectSchema } from './objects/AuditWhereInput.schema';

export const AuditUpdateManySchema: z.ZodType<Prisma.AuditUpdateManyArgs> = z.object({ data: AuditUpdateManyMutationInputObjectSchema, where: AuditWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuditUpdateManyArgs>;

export const AuditUpdateManyZodSchema = z.object({ data: AuditUpdateManyMutationInputObjectSchema, where: AuditWhereInputObjectSchema.optional() }).strict();