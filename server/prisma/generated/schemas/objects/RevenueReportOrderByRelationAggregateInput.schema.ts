import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const RevenueReportOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.RevenueReportOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportOrderByRelationAggregateInput>;
export const RevenueReportOrderByRelationAggregateInputObjectZodSchema = makeSchema();
