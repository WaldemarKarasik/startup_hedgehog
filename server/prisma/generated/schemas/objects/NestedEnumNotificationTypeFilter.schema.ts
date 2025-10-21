import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { NotificationTypeSchema } from '../enums/NotificationType.schema'

const nestedenumnotificationtypefilterSchema = z.object({
  equals: NotificationTypeSchema.optional(),
  in: NotificationTypeSchema.array().optional(),
  notIn: NotificationTypeSchema.array().optional(),
  not: z.union([NotificationTypeSchema, z.lazy(() => NestedEnumNotificationTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumNotificationTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumNotificationTypeFilter> = nestedenumnotificationtypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumNotificationTypeFilter>;
export const NestedEnumNotificationTypeFilterObjectZodSchema = nestedenumnotificationtypefilterSchema;
