import * as z from 'zod';
export const NotificationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    user: z.number(),
    type: z.number(),
    title: z.number(),
    message: z.number(),
    link: z.number(),
    metadata: z.number(),
    isRead: z.number(),
    readAt: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    link: z.string().nullable(),
    readAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    title: z.string().nullable(),
    message: z.string().nullable(),
    link: z.string().nullable(),
    readAt: z.date().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});