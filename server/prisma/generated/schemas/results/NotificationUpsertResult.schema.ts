import * as z from 'zod';
export const NotificationUpsertResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  type: z.unknown(),
  title: z.string(),
  message: z.string(),
  link: z.string().optional(),
  metadata: z.unknown().optional(),
  isRead: z.boolean(),
  readAt: z.date().optional(),
  createdAt: z.date()
});