import * as z from 'zod';

export const AuditStatusSchema = z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED', 'NO_ISSUES_FOUND', 'ISSUES_FOUND'])

export type AuditStatus = z.infer<typeof AuditStatusSchema>;