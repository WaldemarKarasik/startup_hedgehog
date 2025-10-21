import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumRevenueReportStatusWithAggregatesFilterObjectSchema as EnumRevenueReportStatusWithAggregatesFilterObjectSchema } from './EnumRevenueReportStatusWithAggregatesFilter.schema';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const revenuereportscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RevenueReportScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RevenueReportScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RevenueReportScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RevenueReportScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RevenueReportScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  periodStart: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  periodEnd: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  grossRevenue: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  returns: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  fees: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  netRevenue: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  revenueShareAmount: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  proofUrls: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumRevenueReportStatusWithAggregatesFilterObjectSchema), RevenueReportStatusSchema]).optional(),
  isAudited: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  auditFlags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  submittedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  verifiedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RevenueReportScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RevenueReportScalarWhereWithAggregatesInput> = revenuereportscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RevenueReportScalarWhereWithAggregatesInput>;
export const RevenueReportScalarWhereWithAggregatesInputObjectZodSchema = revenuereportscalarwherewithaggregatesinputSchema;
