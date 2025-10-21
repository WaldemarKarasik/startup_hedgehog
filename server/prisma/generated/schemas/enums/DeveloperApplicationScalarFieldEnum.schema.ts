import * as z from 'zod';

export const DeveloperApplicationScalarFieldEnumSchema = z.enum(['id', 'telegram', 'productName', 'productDescription', 'customizationPrice', 'revenueSharePercent', 'githubUrl', 'demoUrl', 'videoUrl', 'hasUsers', 'userCount', 'customizationReady', 'targetBusinesses', 'portfolio', 'additionalInfo', 'status', 'reviewNotes', 'reviewedBy', 'reviewedAt', 'userId', 'createdAt', 'updatedAt'])

export type DeveloperApplicationScalarFieldEnum = z.infer<typeof DeveloperApplicationScalarFieldEnumSchema>;