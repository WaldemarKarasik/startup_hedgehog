import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumHasUsersOptionFilterObjectSchema as EnumHasUsersOptionFilterObjectSchema } from './EnumHasUsersOptionFilter.schema';
import { HasUsersOptionSchema } from '../enums/HasUsersOption.schema';
import { EnumCustomizationReadyOptionFilterObjectSchema as EnumCustomizationReadyOptionFilterObjectSchema } from './EnumCustomizationReadyOptionFilter.schema';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema';
import { EnumApplicationStatusFilterObjectSchema as EnumApplicationStatusFilterObjectSchema } from './EnumApplicationStatusFilter.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const developerapplicationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DeveloperApplicationWhereInputObjectSchema), z.lazy(() => DeveloperApplicationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DeveloperApplicationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DeveloperApplicationWhereInputObjectSchema), z.lazy(() => DeveloperApplicationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  telegram: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  productName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productDescription: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customizationPrice: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  revenueSharePercent: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  githubUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  demoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  videoUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  hasUsers: z.union([z.lazy(() => EnumHasUsersOptionFilterObjectSchema), HasUsersOptionSchema]).optional(),
  userCount: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  customizationReady: z.union([z.lazy(() => EnumCustomizationReadyOptionFilterObjectSchema), CustomizationReadyOptionSchema]).optional(),
  targetBusinesses: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  portfolio: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  additionalInfo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumApplicationStatusFilterObjectSchema), ApplicationStatusSchema]).optional(),
  reviewNotes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  reviewedBy: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  reviewedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const DeveloperApplicationWhereInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationWhereInput> = developerapplicationwhereinputSchema as unknown as z.ZodType<Prisma.DeveloperApplicationWhereInput>;
export const DeveloperApplicationWhereInputObjectZodSchema = developerapplicationwhereinputSchema;
