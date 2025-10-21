import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportDealIdPeriodStartCompoundUniqueInputObjectSchema as RevenueReportDealIdPeriodStartCompoundUniqueInputObjectSchema } from './RevenueReportDealIdPeriodStartCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  dealId_periodStart: z.lazy(() => RevenueReportDealIdPeriodStartCompoundUniqueInputObjectSchema).optional()
}).strict();
export const RevenueReportWhereUniqueInputObjectSchema: z.ZodType<Prisma.RevenueReportWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportWhereUniqueInput>;
export const RevenueReportWhereUniqueInputObjectZodSchema = makeSchema();
