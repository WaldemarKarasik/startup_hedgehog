import * as z from 'zod';

import { AuditTypeSchema } from '../../enums/AuditType.schema';
import { AuditStatusSchema } from '../../enums/AuditStatus.schema';
// prettier-ignore
export const AuditModelSchema = z.object({
    id: z.string(),
    dealId: z.string().nullable(),
    userId: z.string().nullable(),
    type: AuditTypeSchema,
    status: AuditStatusSchema,
    flags: z.array(z.string()),
    priority: z.string(),
    findings: z.string().nullable(),
    actions: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    completedAt: z.date().nullable()
}).strict();

export type AuditPureType = z.infer<typeof AuditModelSchema>;
