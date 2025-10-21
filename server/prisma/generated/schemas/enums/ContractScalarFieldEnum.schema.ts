import * as z from 'zod';

export const ContractScalarFieldEnumSchema = z.enum(['id', 'dealId', 'templateVersion', 'content', 'pdfUrl', 'fixedPrice', 'revenueSharePercent', 'revenueShareDuration', 'supportPeriod', 'criticalSLA', 'normalSLA', 'signatures', 'status', 'createdAt', 'updatedAt', 'signedAt'])

export type ContractScalarFieldEnum = z.infer<typeof ContractScalarFieldEnumSchema>;