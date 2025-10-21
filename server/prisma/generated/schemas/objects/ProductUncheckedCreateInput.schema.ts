import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductCreatetechStackInputObjectSchema as ProductCreatetechStackInputObjectSchema } from './ProductCreatetechStackInput.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { DealUncheckedCreateNestedManyWithoutProductInputObjectSchema as DealUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './DealUncheckedCreateNestedManyWithoutProductInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  developerId: z.string(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  fullDescription: z.string().optional().nullable(),
  category: ProductCategorySchema,
  techStack: z.union([z.lazy(() => ProductCreatetechStackInputObjectSchema), z.string().array()]),
  version: z.string().optional(),
  demoUrl: z.string().optional().nullable(),
  videoUrl: z.string().optional().nullable(),
  githubUrl: z.string().optional().nullable(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]),
  fixedPrice: z.number().optional().nullable(),
  revenueSharePercent: z.number().int(),
  revenueShareDuration: z.string(),
  supportPeriod: z.number().int(),
  criticalSLA: z.number().int(),
  normalSLA: z.number().int(),
  status: ProductStatusSchema.optional(),
  rejectionReason: z.string().optional().nullable(),
  slug: z.string(),
  views: z.number().int().optional(),
  favorites: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date().optional().nullable(),
  deals: z.lazy(() => DealUncheckedCreateNestedManyWithoutProductInputObjectSchema),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema)
}).strict();
export const ProductUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateInput>;
export const ProductUncheckedCreateInputObjectZodSchema = makeSchema();
