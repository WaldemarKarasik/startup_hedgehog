import * as z from 'zod';

import { ContractStatusSchema } from '../../enums/ContractStatus.schema';
// prettier-ignore
export const ContractInputSchema = z.object({
    id: z.string(),
    dealId: z.string(),
    deal: z.unknown(),
    templateVersion: z.string(),
    content: z.string(),
    pdfUrl: z.string().optional().nullable(),
    fixedPrice: z.number().optional().nullable(),
    revenueSharePercent: z.number().int(),
    revenueShareDuration: z.string(),
    supportPeriod: z.number().int(),
    criticalSLA: z.number().int(),
    normalSLA: z.number().int(),
    signatures: z.unknown(),
    status: ContractStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    signedAt: z.date().optional().nullable()
}).strict();

export type ContractInputType = z.infer<typeof ContractInputSchema>;
