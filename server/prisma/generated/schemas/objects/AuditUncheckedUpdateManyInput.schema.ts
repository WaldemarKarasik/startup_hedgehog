import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AuditTypeSchema } from '../enums/AuditType.schema';
import { EnumAuditTypeFieldUpdateOperationsInputObjectSchema as EnumAuditTypeFieldUpdateOperationsInputObjectSchema } from './EnumAuditTypeFieldUpdateOperationsInput.schema';
import { AuditStatusSchema } from '../enums/AuditStatus.schema';
import { EnumAuditStatusFieldUpdateOperationsInputObjectSchema as EnumAuditStatusFieldUpdateOperationsInputObjectSchema } from './EnumAuditStatusFieldUpdateOperationsInput.schema';
import { AuditUpdateflagsInputObjectSchema as AuditUpdateflagsInputObjectSchema } from './AuditUpdateflagsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dealId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([AuditTypeSchema, z.lazy(() => EnumAuditTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([AuditStatusSchema, z.lazy(() => EnumAuditStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  flags: z.union([z.lazy(() => AuditUpdateflagsInputObjectSchema), z.string().array()]).optional(),
  priority: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  findings: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  actions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  completedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const AuditUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AuditUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditUncheckedUpdateManyInput>;
export const AuditUncheckedUpdateManyInputObjectZodSchema = makeSchema();
