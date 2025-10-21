import * as z from 'zod';
export const AuditGroupByResultSchema = z.array(z.object({
  id: z.string(),
  dealId: z.string(),
  userId: z.string(),
  flags: z.array(z.string()),
  priority: z.string(),
  findings: z.string(),
  actions: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  completedAt: z.date(),
  _count: z.object({
    id: z.number(),
    dealId: z.number(),
    userId: z.number(),
    type: z.number(),
    status: z.number(),
    flags: z.number(),
    priority: z.number(),
    findings: z.number(),
    actions: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    completedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    dealId: z.string().nullable(),
    userId: z.string().nullable(),
    flags: z.array(z.string()).nullable(),
    priority: z.string().nullable(),
    findings: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    completedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    dealId: z.string().nullable(),
    userId: z.string().nullable(),
    flags: z.array(z.string()).nullable(),
    priority: z.string().nullable(),
    findings: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    completedAt: z.date().nullable()
  }).nullable().optional()
}));