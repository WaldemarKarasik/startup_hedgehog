import * as z from 'zod';

export const DealStatusSchema = z.enum(['AWAITING_DEVELOPER_CONFIRMATION', 'CONTRACT_GENERATION', 'AWAITING_SIGNATURES', 'ACTIVE', 'COMPLETED', 'DISPUTED', 'CANCELLED'])

export type DealStatus = z.infer<typeof DealStatusSchema>;