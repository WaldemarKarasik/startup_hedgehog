import * as z from 'zod';

import { RevenueReportStatusSchema } from '../../enums/RevenueReportStatus.schema';
// prettier-ignore
export const RevenueReportResultSchema = z.object({
    id: z.string(),
    dealId: z.string(),
    deal: z.unknown(),
    periodStart: z.date(),
    periodEnd: z.date().nullable(),
    grossRevenue: z.number(),
    returns: z.number(),
    fees: z.number(),
    netRevenue: z.number(),
    revenueShareAmount: z.number(),
    proofUrls: z.array(z.string()),
    notes: z.string().nullable(),
    status: RevenueReportStatusSchema,
    isAudited: z.boolean(),
    auditFlags: z.array(z.string()),
    submittedAt: z.date().nullable(),
    verifiedAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type RevenueReportResultType = z.infer<typeof RevenueReportResultSchema>;
