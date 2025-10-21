import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeTypeSchema } from '../enums/DisputeType.schema'

const makeSchema = () => z.object({
  set: DisputeTypeSchema.optional()
}).strict();
export const EnumDisputeTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDisputeTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeTypeFieldUpdateOperationsInput>;
export const EnumDisputeTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
