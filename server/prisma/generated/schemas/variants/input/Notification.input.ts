import * as z from 'zod';

import { NotificationTypeSchema } from '../../enums/NotificationType.schema';
// prettier-ignore
export const NotificationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    type: NotificationTypeSchema,
    title: z.string(),
    message: z.string(),
    link: z.string().optional().nullable(),
    metadata: z.unknown().optional().nullable(),
    isRead: z.boolean(),
    readAt: z.date().optional().nullable(),
    createdAt: z.date()
}).strict();

export type NotificationInputType = z.infer<typeof NotificationInputSchema>;
