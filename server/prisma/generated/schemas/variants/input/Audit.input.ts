import * as z from 'zod';

import { AuditTypeSchema } from '../../enums/AuditType.schema';
import { AuditStatusSchema } from '../../enums/AuditStatus.schema';
// prettier-ignore
export const AuditInputSchema = z.object({
    id: z.string(),
    dealId: z.string().optional().nullable(),
    userId: z.string().optional().nullable(),
    type: AuditTypeSchema,
    status: AuditStatusSchema,
    flags: z.array(z.string()),
    priority: z.string(),
    findings: z.string().optional().nullable(),
    actions: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    completedAt: z.date().optional().nullable()
}).strict();

export type AuditInputType = z.infer<typeof AuditInputSchema>;
