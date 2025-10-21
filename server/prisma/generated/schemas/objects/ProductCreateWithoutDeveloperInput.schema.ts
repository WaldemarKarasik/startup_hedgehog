import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { ProductCreatetechStackInputObjectSchema as ProductCreatetechStackInputObjectSchema } from './ProductCreatetechStackInput.schema';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { DealCreateNestedManyWithoutProductInputObjectSchema as DealCreateNestedManyWithoutProductInputObjectSchema } from './DealCreateNestedManyWithoutProductInput.schema';
import { ReviewCreateNestedManyWithoutProductInputObjectSchema as ReviewCreateNestedManyWithoutProductInputObjectSchema } from './ReviewCreateNestedManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  fullDescription: z.string().optional().nullable(),
  category: ProductCategorySchema,
  techStack: z.union([z.lazy(() => ProductCreatetechStackInputObjectSchema), z.string().array()]).optional(),
  version: z.string().optional(),
  demoUrl: z.string().optional().nullable(),
  videoUrl: z.string().optional().nullable(),
  githubUrl: z.string().optional().nullable(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]).optional(),
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
  updatedAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date().optional().nullable(),
  deals: z.lazy(() => DealCreateNestedManyWithoutProductInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutProductInputObjectSchema).optional()
}).strict();
export const ProductCreateWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.ProductCreateWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateWithoutDeveloperInput>;
export const ProductCreateWithoutDeveloperInputObjectZodSchema = makeSchema();
