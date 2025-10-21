import * as z from 'zod';
export const DisputeFindUniqueResultSchema = z.nullable(z.object({
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
}));