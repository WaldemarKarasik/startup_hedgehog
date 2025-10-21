import * as z from 'zod';

export const DisputeStageSchema = z.enum(['NEGOTIATION', 'MEDIATION'])

export type DisputeStage = z.infer<typeof DisputeStageSchema>;