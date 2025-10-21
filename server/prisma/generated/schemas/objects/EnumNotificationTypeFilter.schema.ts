import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { NestedEnumNotificationTypeFilterObjectSchema as NestedEnumNotificationTypeFilterObjectSchema } from './NestedEnumNotificationTypeFilter.schema'

const makeSchema = () => z.object({
  equals: NotificationTypeSchema.optional(),
  in: NotificationTypeSchema.array().optional(),
  notIn: NotificationTypeSchema.array().optional(),
  not: z.union([NotificationTypeSchema, z.lazy(() => NestedEnumNotificationTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumNotificationTypeFilterObjectSchema: z.ZodType<Prisma.EnumNotificationTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumNotificationTypeFilter>;
export const EnumNotificationTypeFilterObjectZodSchema = makeSchema();
