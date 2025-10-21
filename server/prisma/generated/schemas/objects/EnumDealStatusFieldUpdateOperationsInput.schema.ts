import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealStatusSchema } from '../enums/DealStatus.schema'

const makeSchema = () => z.object({
  set: DealStatusSchema.optional()
}).strict();
export const EnumDealStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDealStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDealStatusFieldUpdateOperationsInput>;
export const EnumDealStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
