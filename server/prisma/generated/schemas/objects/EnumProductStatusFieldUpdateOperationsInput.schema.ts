import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductStatusSchema } from '../enums/ProductStatus.schema'

const makeSchema = () => z.object({
  set: ProductStatusSchema.optional()
}).strict();
export const EnumProductStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumProductStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumProductStatusFieldUpdateOperationsInput>;
export const EnumProductStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
