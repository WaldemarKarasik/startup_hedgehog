import * as z from 'zod';

export const ReviewTypeSchema = z.enum(['DEVELOPER_REVIEW', 'STARTUP_REVIEW'])

export type ReviewType = z.infer<typeof ReviewTypeSchema>;