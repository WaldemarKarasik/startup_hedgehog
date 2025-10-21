import * as z from 'zod';

export const AuditScalarFieldEnumSchema = z.enum(['id', 'dealId', 'userId', 'type', 'status', 'flags', 'priority', 'findings', 'actions', 'createdAt', 'updatedAt', 'completedAt'])

export type AuditScalarFieldEnum = z.infer<typeof AuditScalarFieldEnumSchema>;