import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserTypeSchema } from '../enums/UserType.schema'

const makeSchema = () => z.object({
  set: UserTypeSchema.optional()
}).strict();
export const NullableEnumUserTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumUserTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumUserTypeFieldUpdateOperationsInput>;
export const NullableEnumUserTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
