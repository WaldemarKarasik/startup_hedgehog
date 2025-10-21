import * as z from 'zod';

export const DisputeStatusSchema = z.enum(['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED', 'ESCALATED_TO_COURT'])

export type DisputeStatus = z.infer<typeof DisputeStatusSchema>;