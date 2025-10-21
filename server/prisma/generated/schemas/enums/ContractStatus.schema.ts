import * as z from 'zod';

export const ContractStatusSchema = z.enum(['DRAFT', 'AWAITING_SIGNATURES', 'PARTIALLY_SIGNED', 'FULLY_SIGNED', 'ACTIVE', 'TERMINATED'])

export type ContractStatus = z.infer<typeof ContractStatusSchema>;