import * as z from 'zod';

export const DisputeScalarFieldEnumSchema = z.enum(['id', 'dealId', 'initiatedBy', 'type', 'stage', 'status', 'title', 'description', 'evidenceUrls', 'resolution', 'platformAction', 'createdAt', 'updatedAt', 'resolvedAt'])

export type DisputeScalarFieldEnum = z.infer<typeof DisputeScalarFieldEnumSchema>;