import * as z from 'zod';

export const UserRoleSchema = z.enum(['DEVELOPER', 'BUYER', 'ADMIN'])

export type UserRole = z.infer<typeof UserRoleSchema>;