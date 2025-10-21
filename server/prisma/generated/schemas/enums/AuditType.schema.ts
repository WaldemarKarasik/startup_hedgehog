import * as z from 'zod';

export const AuditTypeSchema = z.enum(['FRAUD_DETECTION', 'RANDOM_CHECK', 'USER_COMPLAINT', 'MANUAL_REVIEW'])

export type AuditType = z.infer<typeof AuditTypeSchema>;