import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'developerId', 'name', 'tagline', 'description', 'fullDescription', 'category', 'techStack', 'version', 'demoUrl', 'videoUrl', 'githubUrl', 'images', 'fixedPrice', 'revenueSharePercent', 'revenueShareDuration', 'supportPeriod', 'criticalSLA', 'normalSLA', 'status', 'rejectionReason', 'slug', 'views', 'favorites', 'createdAt', 'updatedAt', 'publishedAt'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;