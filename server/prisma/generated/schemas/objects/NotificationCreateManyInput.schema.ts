import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { NotificationTypeSchema } from '../enums/NotificationType.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  type: NotificationTypeSchema,
  title: z.string(),
  message: z.string(),
  link: z.string().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  isRead: z.boolean().optional(),
  readAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateManyInputObjectSchema: z.ZodType<Prisma.NotificationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateManyInput>;
export const NotificationCreateManyInputObjectZodSchema = makeSchema();
