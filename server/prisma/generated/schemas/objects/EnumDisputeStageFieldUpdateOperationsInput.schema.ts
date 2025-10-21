import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStageSchema } from '../enums/DisputeStage.schema'

const makeSchema = () => z.object({
  set: DisputeStageSchema.optional()
}).strict();
export const EnumDisputeStageFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDisputeStageFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeStageFieldUpdateOperationsInput>;
export const EnumDisputeStageFieldUpdateOperationsInputObjectZodSchema = makeSchema();
