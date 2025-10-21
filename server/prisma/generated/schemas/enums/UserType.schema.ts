import * as z from 'zod';

export const UserTypeSchema = z.enum(['INDIVIDUAL', 'SELF_EMPLOYED', 'IP', 'LLC'])

export type UserType = z.infer<typeof UserTypeSchema>;