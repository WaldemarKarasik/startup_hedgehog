import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumAuditTypeWithAggregatesFilterObjectSchema as EnumAuditTypeWithAggregatesFilterObjectSchema } from './EnumAuditTypeWithAggregatesFilter.schema';
import { AuditTypeSchema } from '../enums/AuditType.schema';
import { EnumAuditStatusWithAggregatesFilterObjectSchema as EnumAuditStatusWithAggregatesFilterObjectSchema } from './EnumAuditStatusWithAggregatesFilter.schema';
import { AuditStatusSchema } from '../enums/AuditStatus.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const auditscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AuditScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuditScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuditScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuditScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuditScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => EnumAuditTypeWithAggregatesFilterObjectSchema), AuditTypeSchema]).optional(),
  status: z.union([z.lazy(() => EnumAuditStatusWithAggregatesFilterObjectSchema), AuditStatusSchema]).optional(),
  flags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  priority: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  findings: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  actions: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  completedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const AuditScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AuditScalarWhereWithAggregatesInput> = auditscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AuditScalarWhereWithAggregatesInput>;
export const AuditScalarWhereWithAggregatesInputObjectZodSchema = auditscalarwherewithaggregatesinputSchema;
