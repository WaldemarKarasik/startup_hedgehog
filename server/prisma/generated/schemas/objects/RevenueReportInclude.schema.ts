import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealArgsObjectSchema as DealArgsObjectSchema } from './DealArgs.schema'

const makeSchema = () => z.object({
  deal: z.union([z.boolean(), z.lazy(() => DealArgsObjectSchema)]).optional()
}).strict();
export const RevenueReportIncludeObjectSchema: z.ZodType<Prisma.RevenueReportInclude> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportInclude>;
export const RevenueReportIncludeObjectZodSchema = makeSchema();
