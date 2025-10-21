import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { NestedEnumProductCategoryFilterObjectSchema as NestedEnumProductCategoryFilterObjectSchema } from './NestedEnumProductCategoryFilter.schema'

const makeSchema = () => z.object({
  equals: ProductCategorySchema.optional(),
  in: ProductCategorySchema.array().optional(),
  notIn: ProductCategorySchema.array().optional(),
  not: z.union([ProductCategorySchema, z.lazy(() => NestedEnumProductCategoryFilterObjectSchema)]).optional()
}).strict();
export const EnumProductCategoryFilterObjectSchema: z.ZodType<Prisma.EnumProductCategoryFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumProductCategoryFilter>;
export const EnumProductCategoryFilterObjectZodSchema = makeSchema();
