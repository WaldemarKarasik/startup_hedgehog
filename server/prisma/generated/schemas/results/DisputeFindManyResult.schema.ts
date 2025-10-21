import * as z from 'zod';
export const DisputeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  dealId: z.string(),
  deal: z.unknown(),
  initiatedBy: z.string(),
  initiator: z.unknown(),
  type: z.unknown(),
  stage: z.unknown(),
  status: z.unknown(),
  title: z.string(),
  description: z.string(),
  evidenceUrls: z.array(z.string()),
  resolution: z.string().optional(),
  platformAction: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  resolvedAt: z.date().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});