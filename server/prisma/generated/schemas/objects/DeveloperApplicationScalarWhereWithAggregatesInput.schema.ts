import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumHasUsersOptionWithAggregatesFilterObjectSchema as EnumHasUsersOptionWithAggregatesFilterObjectSchema } from './EnumHasUsersOptionWithAggregatesFilter.schema';
import { HasUsersOptionSchema } from '../enums/HasUsersOption.schema';
import { EnumCustomizationReadyOptionWithAggregatesFilterObjectSchema as EnumCustomizationReadyOptionWithAggregatesFilterObjectSchema } from './EnumCustomizationReadyOptionWithAggregatesFilter.schema';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema';
import { EnumApplicationStatusWithAggregatesFilterObjectSchema as EnumApplicationStatusWithAggregatesFilterObjectSchema } from './EnumApplicationStatusWithAggregatesFilter.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const developerapplicationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DeveloperApplicationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DeveloperApplicationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeveloperApplicationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeveloperApplicationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DeveloperApplicationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  telegram: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  productName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productDescription: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  customizationPrice: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  revenueSharePercent: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  githubUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  demoUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  videoUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  hasUsers: z.union([z.lazy(() => EnumHasUsersOptionWithAggregatesFilterObjectSchema), HasUsersOptionSchema]).optional(),
  userCount: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  customizationReady: z.union([z.lazy(() => EnumCustomizationReadyOptionWithAggregatesFilterObjectSchema), CustomizationReadyOptionSchema]).optional(),
  targetBusinesses: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  portfolio: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  additionalInfo: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumApplicationStatusWithAggregatesFilterObjectSchema), ApplicationStatusSchema]).optional(),
  reviewNotes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  reviewedBy: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  reviewedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DeveloperApplicationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationScalarWhereWithAggregatesInput> = developerapplicationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DeveloperApplicationScalarWhereWithAggregatesInput>;
export const DeveloperApplicationScalarWhereWithAggregatesInputObjectZodSchema = developerapplicationscalarwherewithaggregatesinputSchema;
