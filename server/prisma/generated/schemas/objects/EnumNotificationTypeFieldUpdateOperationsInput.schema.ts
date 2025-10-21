import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { NotificationTypeSchema } from '../enums/NotificationType.schema'

const makeSchema = () => z.object({
  set: NotificationTypeSchema.optional()
}).strict();
export const EnumNotificationTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumNotificationTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumNotificationTypeFieldUpdateOperationsInput>;
export const EnumNotificationTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
