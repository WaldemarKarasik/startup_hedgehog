import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCategorySchema } from '../enums/ProductCategory.schema'

const nestedenumproductcategoryfilterSchema = z.object({
  equals: ProductCategorySchema.optional(),
  in: ProductCategorySchema.array().optional(),
  notIn: ProductCategorySchema.array().optional(),
  not: z.union([ProductCategorySchema, z.lazy(() => NestedEnumProductCategoryFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumProductCategoryFilterObjectSchema: z.ZodType<Prisma.NestedEnumProductCategoryFilter> = nestedenumproductcategoryfilterSchema as unknown as z.ZodType<Prisma.NestedEnumProductCategoryFilter>;
export const NestedEnumProductCategoryFilterObjectZodSchema = nestedenumproductcategoryfilterSchema;
