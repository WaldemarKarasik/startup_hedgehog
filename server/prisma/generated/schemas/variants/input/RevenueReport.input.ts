import * as z from 'zod';

import { RevenueReportStatusSchema } from '../../enums/RevenueReportStatus.schema';
// prettier-ignore
export const RevenueReportInputSchema = z.object({
    id: z.string(),
    dealId: z.string(),
    deal: z.unknown(),
    periodStart: z.date(),
    periodEnd: z.date().optional().nullable(),
    grossRevenue: z.number(),
    returns: z.number(),
    fees: z.number(),
    netRevenue: z.number(),
    revenueShareAmount: z.number(),
    proofUrls: z.array(z.string()),
    notes: z.string().optional().nullable(),
    status: RevenueReportStatusSchema,
    isAudited: z.boolean(),
    auditFlags: z.array(z.string()),
    submittedAt: z.date().optional().nullable(),
    verifiedAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type RevenueReportInputType = z.infer<typeof RevenueReportInputSchema>;
