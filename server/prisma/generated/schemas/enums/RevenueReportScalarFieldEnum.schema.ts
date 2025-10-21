import * as z from 'zod';

export const RevenueReportScalarFieldEnumSchema = z.enum(['id', 'dealId', 'periodStart', 'periodEnd', 'grossRevenue', 'returns', 'fees', 'netRevenue', 'revenueShareAmount', 'proofUrls', 'notes', 'status', 'isAudited', 'auditFlags', 'submittedAt', 'verifiedAt', 'createdAt', 'updatedAt'])

export type RevenueReportScalarFieldEnum = z.infer<typeof RevenueReportScalarFieldEnumSchema>;