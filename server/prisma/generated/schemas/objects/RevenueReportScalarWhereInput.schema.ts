import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumRevenueReportStatusFilterObjectSchema as EnumRevenueReportStatusFilterObjectSchema } from './EnumRevenueReportStatusFilter.schema';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const revenuereportscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RevenueReportScalarWhereInputObjectSchema), z.lazy(() => RevenueReportScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RevenueReportScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RevenueReportScalarWhereInputObjectSchema), z.lazy(() => RevenueReportScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  periodStart: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  periodEnd: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  grossRevenue: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  returns: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  fees: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  netRevenue: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  revenueShareAmount: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  proofUrls: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumRevenueReportStatusFilterObjectSchema), RevenueReportStatusSchema]).optional(),
  isAudited: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  auditFlags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  submittedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  verifiedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RevenueReportScalarWhereInputObjectSchema: z.ZodType<Prisma.RevenueReportScalarWhereInput> = revenuereportscalarwhereinputSchema as unknown as z.ZodType<Prisma.RevenueReportScalarWhereInput>;
export const RevenueReportScalarWhereInputObjectZodSchema = revenuereportscalarwhereinputSchema;
