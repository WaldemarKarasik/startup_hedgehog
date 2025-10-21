import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { EnumDisputeTypeFieldUpdateOperationsInputObjectSchema as EnumDisputeTypeFieldUpdateOperationsInputObjectSchema } from './EnumDisputeTypeFieldUpdateOperationsInput.schema';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { EnumDisputeStageFieldUpdateOperationsInputObjectSchema as EnumDisputeStageFieldUpdateOperationsInputObjectSchema } from './EnumDisputeStageFieldUpdateOperationsInput.schema';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { EnumDisputeStatusFieldUpdateOperationsInputObjectSchema as EnumDisputeStatusFieldUpdateOperationsInputObjectSchema } from './EnumDisputeStatusFieldUpdateOperationsInput.schema';
import { DisputeUpdateevidenceUrlsInputObjectSchema as DisputeUpdateevidenceUrlsInputObjectSchema } from './DisputeUpdateevidenceUrlsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  initiatedBy: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([DisputeTypeSchema, z.lazy(() => EnumDisputeTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  stage: z.union([DisputeStageSchema, z.lazy(() => EnumDisputeStageFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([DisputeStatusSchema, z.lazy(() => EnumDisputeStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  evidenceUrls: z.union([z.lazy(() => DisputeUpdateevidenceUrlsInputObjectSchema), z.string().array()]).optional(),
  resolution: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  platformAction: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resolvedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const DisputeUncheckedUpdateWithoutDealInputObjectSchema: z.ZodType<Prisma.DisputeUncheckedUpdateWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUncheckedUpdateWithoutDealInput>;
export const DisputeUncheckedUpdateWithoutDealInputObjectZodSchema = makeSchema();
