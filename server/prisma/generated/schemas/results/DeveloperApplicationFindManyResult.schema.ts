import * as z from 'zod';
export const DeveloperApplicationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  telegram: z.string().optional(),
  productName: z.string(),
  productDescription: z.string(),
  customizationPrice: z.number().int(),
  revenueSharePercent: z.number().int(),
  githubUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  videoUrl: z.string().optional(),
  hasUsers: z.unknown(),
  userCount: z.string().optional(),
  customizationReady: z.unknown(),
  targetBusinesses: z.string().optional(),
  portfolio: z.string().optional(),
  additionalInfo: z.string().optional(),
  status: z.unknown(),
  reviewNotes: z.string().optional(),
  reviewedBy: z.string().optional(),
  reviewedAt: z.date().optional(),
  userId: z.string(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
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