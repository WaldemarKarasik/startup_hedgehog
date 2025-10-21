import * as z from 'zod';
export const AuditUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  dealId: z.string().optional(),
  userId: z.string().optional(),
  type: z.unknown(),
  status: z.unknown(),
  flags: z.array(z.string()),
  priority: z.string(),
  findings: z.string().optional(),
  actions: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  completedAt: z.date().optional()
}));