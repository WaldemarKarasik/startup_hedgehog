import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumProductCategoryFilterObjectSchema as EnumProductCategoryFilterObjectSchema } from './EnumProductCategoryFilter.schema';
import { ProductCategorySchema } from '../enums/ProductCategory.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumProductStatusFilterObjectSchema as EnumProductStatusFilterObjectSchema } from './EnumProductStatusFilter.schema';
import { ProductStatusSchema } from '../enums/ProductStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const productscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  developerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagline: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fullDescription: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  category: z.union([z.lazy(() => EnumProductCategoryFilterObjectSchema), ProductCategorySchema]).optional(),
  techStack: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  version: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  demoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  videoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  githubUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  fixedPrice: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  revenueSharePercent: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  revenueShareDuration: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  supportPeriod: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  criticalSLA: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  normalSLA: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumProductStatusFilterObjectSchema), ProductStatusSchema]).optional(),
  rejectionReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  views: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  favorites: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  publishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const ProductScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductScalarWhereInput> = productscalarwhereinputSchema as unknown as z.ZodType<Prisma.ProductScalarWhereInput>;
export const ProductScalarWhereInputObjectZodSchema = productscalarwhereinputSchema;
