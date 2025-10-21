import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditTypeSchema } from '../enums/AuditType.schema'

const makeSchema = () => z.object({
  set: AuditTypeSchema.optional()
}).strict();
export const EnumAuditTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAuditTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditTypeFieldUpdateOperationsInput>;
export const EnumAuditTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
