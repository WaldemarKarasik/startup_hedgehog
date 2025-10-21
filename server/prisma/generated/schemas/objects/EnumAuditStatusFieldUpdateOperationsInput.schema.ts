import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditStatusSchema } from '../enums/AuditStatus.schema'

const makeSchema = () => z.object({
  set: AuditStatusSchema.optional()
}).strict();
export const EnumAuditStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAuditStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditStatusFieldUpdateOperationsInput>;
export const EnumAuditStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
