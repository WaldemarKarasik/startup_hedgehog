import * as z from 'zod';
export const ProductFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  developerId: z.string(),
  developer: z.unknown(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  fullDescription: z.string().optional(),
  category: z.unknown(),
  techStack: z.array(z.string()),
  version: z.string(),
  demoUrl: z.string().optional(),
  videoUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  images: z.array(z.string()),
  fixedPrice: z.number().optional(),
  revenueSharePercent: z.number().int(),
  revenueShareDuration: z.string(),
  supportPeriod: z.number().int(),
  criticalSLA: z.number().int(),
  normalSLA: z.number().int(),
  status: z.unknown(),
  rejectionReason: z.string().optional(),
  slug: z.string(),
  views: z.number().int(),
  favorites: z.number().int(),
  deals: z.array(z.unknown()),
  reviews: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  publishedAt: z.date().optional()
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