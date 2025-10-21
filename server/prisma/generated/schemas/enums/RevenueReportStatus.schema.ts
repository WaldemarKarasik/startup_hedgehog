import * as z from 'zod';

export const RevenueReportStatusSchema = z.enum(['PENDING', 'SUBMITTED', 'UNDER_REVIEW', 'DISPUTED', 'APPROVED', 'PAID'])

export type RevenueReportStatus = z.infer<typeof RevenueReportStatusSchema>;