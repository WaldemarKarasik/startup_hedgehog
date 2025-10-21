import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './RevenueReportSelect.schema';
import { RevenueReportIncludeObjectSchema as RevenueReportIncludeObjectSchema } from './RevenueReportInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RevenueReportSelectObjectSchema).optional(),
  include: z.lazy(() => RevenueReportIncludeObjectSchema).optional()
}).strict();
export const RevenueReportArgsObjectSchema = makeSchema();
export const RevenueReportArgsObjectZodSchema = makeSchema();
