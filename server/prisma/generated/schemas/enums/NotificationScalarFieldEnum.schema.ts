import * as z from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'userId', 'type', 'title', 'message', 'link', 'metadata', 'isRead', 'readAt', 'createdAt'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;