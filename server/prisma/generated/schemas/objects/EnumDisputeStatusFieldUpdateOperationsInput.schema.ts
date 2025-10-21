import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema'

const makeSchema = () => z.object({
  set: DisputeStatusSchema.optional()
}).strict();
export const EnumDisputeStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDisputeStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeStatusFieldUpdateOperationsInput>;
export const EnumDisputeStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
