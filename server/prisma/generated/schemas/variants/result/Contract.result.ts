import * as z from 'zod';

import { ContractStatusSchema } from '../../enums/ContractStatus.schema';
// prettier-ignore
export const ContractResultSchema = z.object({
    id: z.string(),
    dealId: z.string(),
    deal: z.unknown(),
    templateVersion: z.string(),
    content: z.string(),
    pdfUrl: z.string().nullable(),
    fixedPrice: z.number().nullable(),
    revenueSharePercent: z.number().int(),
    revenueShareDuration: z.string(),
    supportPeriod: z.number().int(),
    criticalSLA: z.number().int(),
    normalSLA: z.number().int(),
    signatures: z.unknown(),
    status: ContractStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    signedAt: z.date().nullable()
}).strict();

export type ContractResultType = z.infer<typeof ContractResultSchema>;
