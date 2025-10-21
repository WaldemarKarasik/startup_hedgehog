import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumDisputeTypeFilterObjectSchema as EnumDisputeTypeFilterObjectSchema } from './EnumDisputeTypeFilter.schema';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { EnumDisputeStageFilterObjectSchema as EnumDisputeStageFilterObjectSchema } from './EnumDisputeStageFilter.schema';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { EnumDisputeStatusFilterObjectSchema as EnumDisputeStatusFilterObjectSchema } from './EnumDisputeStatusFilter.schema';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const disputescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DisputeScalarWhereInputObjectSchema), z.lazy(() => DisputeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DisputeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DisputeScalarWhereInputObjectSchema), z.lazy(() => DisputeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  initiatedBy: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumDisputeTypeFilterObjectSchema), DisputeTypeSchema]).optional(),
  stage: z.union([z.lazy(() => EnumDisputeStageFilterObjectSchema), DisputeStageSchema]).optional(),
  status: z.union([z.lazy(() => EnumDisputeStatusFilterObjectSchema), DisputeStatusSchema]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  evidenceUrls: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  resolution: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  platformAction: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  resolvedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const DisputeScalarWhereInputObjectSchema: z.ZodType<Prisma.DisputeScalarWhereInput> = disputescalarwhereinputSchema as unknown as z.ZodType<Prisma.DisputeScalarWhereInput>;
export const DisputeScalarWhereInputObjectZodSchema = disputescalarwhereinputSchema;
