import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { ProductIncludeObjectSchema as ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
    id: z.boolean().optional(),
    developerId: z.boolean().optional(),
    developer: z.boolean().optional(),
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
    deals: z.boolean().optional(),
    reviews: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProductSelect>;

export const ProductFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    developerId: z.boolean().optional(),
    developer: z.boolean().optional(),
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
    deals: z.boolean().optional(),
    reviews: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    publishedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductFindFirstOrThrowSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({ select: ProductFindFirstOrThrowSelectSchema.optional(), include: ProductIncludeObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductFindFirstOrThrowArgs>;

export const ProductFindFirstOrThrowZodSchema = z.object({ select: ProductFindFirstOrThrowSelectSchema.optional(), include: ProductIncludeObjectSchema.optional(), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();