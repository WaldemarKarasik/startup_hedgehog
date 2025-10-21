import * as z from 'zod';

export const DisputeTypeSchema = z.enum(['UNPAID_REVENUE_SHARE', 'REVENUE_UNDERREPORTING', 'NO_DEVELOPER_SUPPORT', 'CODE_QUALITY', 'UNAUTHORIZED_RESALE', 'IP_VIOLATION', 'OTHER'])

export type DisputeType = z.infer<typeof DisputeTypeSchema>;