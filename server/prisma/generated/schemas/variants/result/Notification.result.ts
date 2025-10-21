import * as z from 'zod';

import { NotificationTypeSchema } from '../../enums/NotificationType.schema';
// prettier-ignore
export const NotificationResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    type: NotificationTypeSchema,
    title: z.string(),
    message: z.string(),
    link: z.string().nullable(),
    metadata: z.unknown().nullable(),
    isRead: z.boolean(),
    readAt: z.date().nullable(),
    createdAt: z.date()
}).strict();

export type NotificationResultType = z.infer<typeof NotificationResultSchema>;
