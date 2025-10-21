import * as z from 'zod';

import { DisputeTypeSchema } from '../../enums/DisputeType.schema';
import { DisputeStageSchema } from '../../enums/DisputeStage.schema';
import { DisputeStatusSchema } from '../../enums/DisputeStatus.schema';
// prettier-ignore
export const DisputeResultSchema = z.object({
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
    resolution: z.string().nullable(),
    platformAction: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    resolvedAt: z.date().nullable()
}).strict();

export type DisputeResultType = z.infer<typeof DisputeResultSchema>;
