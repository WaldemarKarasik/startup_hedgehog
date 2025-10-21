import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewTypeSchema } from '../enums/ReviewType.schema'

const makeSchema = () => z.object({
  set: ReviewTypeSchema.optional()
}).strict();
export const EnumReviewTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumReviewTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumReviewTypeFieldUpdateOperationsInput>;
export const EnumReviewTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
