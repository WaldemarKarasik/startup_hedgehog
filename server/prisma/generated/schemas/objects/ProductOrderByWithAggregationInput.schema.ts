import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductCountOrderByAggregateInputObjectSchema as ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema';
import { ProductAvgOrderByAggregateInputObjectSchema as ProductAvgOrderByAggregateInputObjectSchema } from './ProductAvgOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputObjectSchema as ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputObjectSchema as ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema';
import { ProductSumOrderByAggregateInputObjectSchema as ProductSumOrderByAggregateInputObjectSchema } from './ProductSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  developerId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  tagline: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  fullDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: SortOrderSchema.optional(),
  techStack: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  demoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  videoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  githubUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  images: SortOrderSchema.optional(),
  fixedPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  rejectionReason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  slug: SortOrderSchema.optional(),
  views: SortOrderSchema.optional(),
  favorites: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  publishedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductOrderByWithAggregationInput>;
export const ProductOrderByWithAggregationInputObjectZodSchema = makeSchema();
