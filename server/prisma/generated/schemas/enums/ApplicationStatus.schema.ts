import * as z from 'zod';

export const ApplicationStatusSchema = z.enum(['NEW', 'IN_REVIEW', 'APPROVED', 'REJECTED', 'CONTACTED'])

export type ApplicationStatus = z.infer<typeof ApplicationStatusSchema>;