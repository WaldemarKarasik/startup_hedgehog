import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { DealFindManySchema as DealFindManySchema } from '../findManyDeal.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  developerId: z.boolean().optional(),
  developer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  name: z.boolean().optional(),
  tagline: z.boolean().optional(),
  description: z.boolean().optional(),
  fullDescription: z.boolean().optional(),
  category: z.boolean().optional(),
  techStack: z.boolean().optional(),
  version: z.boolean().optional(),
  demoUrl: z.boolean().optional(),
  videoUrl: z.boolean().optional(),
  githubUrl: z.boolean().optional(),
  images: z.boolean().optional(),
  fixedPrice: z.boolean().optional(),
  revenueSharePercent: z.boolean().optional(),
  revenueShareDuration: z.boolean().optional(),
  supportPeriod: z.boolean().optional(),
  criticalSLA: z.boolean().optional(),
  normalSLA: z.boolean().optional(),
  status: z.boolean().optional(),
  rejectionReason: z.boolean().optional(),
  slug: z.boolean().optional(),
  views: z.boolean().optional(),
  favorites: z.boolean().optional(),
  deals: z.union([z.boolean(), z.lazy(() => DealFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  publishedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductSelectObjectSchema: z.ZodType<Prisma.ProductSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductSelect>;
export const ProductSelectObjectZodSchema = makeSchema();
