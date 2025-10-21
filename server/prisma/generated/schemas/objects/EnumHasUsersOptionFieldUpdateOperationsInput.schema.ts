import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { HasUsersOptionSchema } from '../enums/HasUsersOption.schema'

const makeSchema = () => z.object({
  set: HasUsersOptionSchema.optional()
}).strict();
export const EnumHasUsersOptionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumHasUsersOptionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumHasUsersOptionFieldUpdateOperationsInput>;
export const EnumHasUsersOptionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
