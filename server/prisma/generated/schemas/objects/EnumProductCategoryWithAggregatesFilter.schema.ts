import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedEnumProductCategoryWithAggregatesFilterObjectSchema as NestedEnumProductCategoryWithAggregatesFilterObjectSchema } from './NestedEnumProductCategoryWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumProductCategoryFilterObjectSchema as NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema'

const makeSchema = () => z.object({
  equals: ProductCategorySchema.optional(),
  in: ProductCategorySchema.array().optional(),
  notIn: ProductCategorySchema.array().optional(),
  not: z.union([ProductCategorySchema, z.lazy(() => NestedEnumProductCategoryWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumProductCategoryFilterObjectSchema).optional()
}).strict();
export const EnumProductCategoryWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumProductCategoryWithAggregatesFilter>;
export const EnumProductCategoryWithAggregatesFilterObjectZodSchema = makeSchema();
