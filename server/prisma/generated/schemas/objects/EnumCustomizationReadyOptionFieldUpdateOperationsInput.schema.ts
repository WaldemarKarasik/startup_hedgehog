import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema'

const makeSchema = () => z.object({
  set: CustomizationReadyOptionSchema.optional()
}).strict();
export const EnumCustomizationReadyOptionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumCustomizationReadyOptionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumCustomizationReadyOptionFieldUpdateOperationsInput>;
export const EnumCustomizationReadyOptionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
