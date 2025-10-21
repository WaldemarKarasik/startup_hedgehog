import * as z from 'zod';

export const HasUsersOptionSchema = z.enum(['yes', 'no'])

export type HasUsersOption = z.infer<typeof HasUsersOptionSchema>;