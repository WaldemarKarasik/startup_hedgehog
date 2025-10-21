import * as z from 'zod';

import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
import { ProductStatusSchema } from '../../enums/ProductStatus.schema';
// prettier-ignore
export const ProductModelSchema = z.object({
    id: z.string(),
    developerId: z.string(),
    developer: z.unknown(),
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    fullDescription: z.string().nullable(),
    category: ProductCategorySchema,
    techStack: z.array(z.string()),
    version: z.string(),
    demoUrl: z.string().nullable(),
    videoUrl: z.string().nullable(),
    githubUrl: z.string().nullable(),
    images: z.array(z.string()),
    fixedPrice: z.number().nullable(),
    revenueSharePercent: z.number().int(),
    revenueShareDuration: z.string(),
    supportPeriod: z.number().int(),
    criticalSLA: z.number().int(),
    normalSLA: z.number().int(),
    status: ProductStatusSchema,
    rejectionReason: z.string().nullable(),
    slug: z.string(),
    views: z.number().int(),
    favorites: z.number().int(),
    deals: z.array(z.unknown()),
    reviews: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    publishedAt: z.date().nullable()
}).strict();

export type ProductPureType = z.infer<typeof ProductModelSchema>;
