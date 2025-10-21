import * as z from 'zod';

import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
import { ProductStatusSchema } from '../../enums/ProductStatus.schema';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    developerId: z.string(),
    developer: z.unknown(),
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    fullDescription: z.string().optional().nullable(),
    category: ProductCategorySchema,
    techStack: z.array(z.string()),
    version: z.string(),
    demoUrl: z.string().optional().nullable(),
    videoUrl: z.string().optional().nullable(),
    githubUrl: z.string().optional().nullable(),
    images: z.array(z.string()),
    fixedPrice: z.number().optional().nullable(),
    revenueSharePercent: z.number().int(),
    revenueShareDuration: z.string(),
    supportPeriod: z.number().int(),
    criticalSLA: z.number().int(),
    normalSLA: z.number().int(),
    status: ProductStatusSchema,
    rejectionReason: z.string().optional().nullable(),
    slug: z.string(),
    views: z.number().int(),
    favorites: z.number().int(),
    deals: z.array(z.unknown()),
    reviews: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    publishedAt: z.date().optional().nullable()
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
