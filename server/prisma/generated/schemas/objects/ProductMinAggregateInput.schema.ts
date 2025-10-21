import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  developerId: z.literal(true).optional(),
  name: z.literal(true).optional(),
  tagline: z.literal(true).optional(),
  description: z.literal(true).optional(),
  fullDescription: z.literal(true).optional(),
  category: z.literal(true).optional(),
  version: z.literal(true).optional(),
  demoUrl: z.literal(true).optional(),
  videoUrl: z.literal(true).optional(),
  githubUrl: z.literal(true).optional(),
  fixedPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional(),
  revenueShareDuration: z.literal(true).optional(),
  supportPeriod: z.literal(true).optional(),
  criticalSLA: z.literal(true).optional(),
  normalSLA: z.literal(true).optional(),
  status: z.literal(true).optional(),
  rejectionReason: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  views: z.literal(true).optional(),
  favorites: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  publishedAt: z.literal(true).optional()
}).strict();
export const ProductMinAggregateInputObjectSchema: z.ZodType<Prisma.ProductMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductMinAggregateInputType>;
export const ProductMinAggregateInputObjectZodSchema = makeSchema();
