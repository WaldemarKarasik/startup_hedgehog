import * as z from 'zod';

import { DisputeTypeSchema } from '../../enums/DisputeType.schema';
import { DisputeStageSchema } from '../../enums/DisputeStage.schema';
import { DisputeStatusSchema } from '../../enums/DisputeStatus.schema';
// prettier-ignore
export const DisputeInputSchema = z.object({
    id: z.string(),
    dealId: z.string(),
    deal: z.unknown(),
    initiatedBy: z.string(),
    initiator: z.unknown(),
    type: DisputeTypeSchema,
    stage: DisputeStageSchema,
    status: DisputeStatusSchema,
    title: z.string(),
    description: z.string(),
    evidenceUrls: z.array(z.string()),
    resolution: z.string().optional().nullable(),
    platformAction: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    resolvedAt: z.date().optional().nullable()
}).strict();

export type DisputeInputType = z.infer<typeof DisputeInputSchema>;
