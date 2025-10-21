import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumDisputeTypeWithAggregatesFilterObjectSchema as EnumDisputeTypeWithAggregatesFilterObjectSchema } from './EnumDisputeTypeWithAggregatesFilter.schema';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { EnumDisputeStageWithAggregatesFilterObjectSchema as EnumDisputeStageWithAggregatesFilterObjectSchema } from './EnumDisputeStageWithAggregatesFilter.schema';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { EnumDisputeStatusWithAggregatesFilterObjectSchema as EnumDisputeStatusWithAggregatesFilterObjectSchema } from './EnumDisputeStatusWithAggregatesFilter.schema';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const disputescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DisputeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DisputeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DisputeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DisputeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DisputeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  initiatedBy: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumDisputeTypeWithAggregatesFilterObjectSchema), DisputeTypeSchema]).optional(),
  stage: z.union([z.lazy(() => EnumDisputeStageWithAggregatesFilterObjectSchema), DisputeStageSchema]).optional(),
  status: z.union([z.lazy(() => EnumDisputeStatusWithAggregatesFilterObjectSchema), DisputeStatusSchema]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  evidenceUrls: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  resolution: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  platformAction: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  resolvedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const DisputeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DisputeScalarWhereWithAggregatesInput> = disputescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DisputeScalarWhereWithAggregatesInput>;
export const DisputeScalarWhereWithAggregatesInputObjectZodSchema = disputescalarwherewithaggregatesinputSchema;
