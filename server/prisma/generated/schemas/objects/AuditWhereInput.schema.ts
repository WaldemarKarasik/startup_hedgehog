import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumAuditTypeFilterObjectSchema as EnumAuditTypeFilterObjectSchema } from './EnumAuditTypeFilter.schema';
import { AuditTypeSchema } from '../enums/AuditType.schema';
import { EnumAuditStatusFilterObjectSchema as EnumAuditStatusFilterObjectSchema } from './EnumAuditStatusFilter.schema';
import { AuditStatusSchema } from '../enums/AuditStatus.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const auditwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AuditWhereInputObjectSchema), z.lazy(() => AuditWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuditWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuditWhereInputObjectSchema), z.lazy(() => AuditWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumAuditTypeFilterObjectSchema), AuditTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumAuditStatusFilterObjectSchema), AuditStatusSchema]).optional(),
  flags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  priority: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  findings: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  actions: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  completedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const AuditWhereInputObjectSchema: z.ZodType<Prisma.AuditWhereInput> = auditwhereinputSchema as unknown as z.ZodType<Prisma.AuditWhereInput>;
export const AuditWhereInputObjectZodSchema = auditwhereinputSchema;
