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
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DealUpdateOneRequiredWithoutDisputesNestedInputObjectSchema as DealUpdateOneRequiredWithoutDisputesNestedInputObjectSchema } from './DealUpdateOneRequiredWithoutDisputesNestedInput.schema';
import { UserUpdateOneRequiredWithoutDisputesNestedInputObjectSchema as UserUpdateOneRequiredWithoutDisputesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDisputesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  resolvedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deal: z.lazy(() => DealUpdateOneRequiredWithoutDisputesNestedInputObjectSchema).optional(),
  initiator: z.lazy(() => UserUpdateOneRequiredWithoutDisputesNestedInputObjectSchema).optional()
}).strict();
export const DisputeUpdateInputObjectSchema: z.ZodType<Prisma.DisputeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpdateInput>;
export const DisputeUpdateInputObjectZodSchema = makeSchema();
