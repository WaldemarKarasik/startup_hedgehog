import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditSelectObjectSchema as AuditSelectObjectSchema } from './objects/AuditSelect.schema';
import { AuditCreateInputObjectSchema as AuditCreateInputObjectSchema } from './objects/AuditCreateInput.schema';
import { AuditUncheckedCreateInputObjectSchema as AuditUncheckedCreateInputObjectSchema } from './objects/AuditUncheckedCreateInput.schema';

export const AuditCreateOneSchema: z.ZodType<Prisma.AuditCreateArgs> = z.object({ select: AuditSelectObjectSchema.optional(),  data: z.union([AuditCreateInputObjectSchema, AuditUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AuditCreateArgs>;

export const AuditCreateOneZodSchema = z.object({ select: AuditSelectObjectSchema.optional(),  data: z.union([AuditCreateInputObjectSchema, AuditUncheckedCreateInputObjectSchema]) }).strict();