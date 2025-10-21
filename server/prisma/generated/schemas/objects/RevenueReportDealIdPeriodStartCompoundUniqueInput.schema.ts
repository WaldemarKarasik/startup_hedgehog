import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  dealId: z.string(),
  periodStart: z.date()
}).strict();
export const RevenueReportDealIdPeriodStartCompoundUniqueInputObjectSchema: z.ZodType<Prisma.RevenueReportDealIdPeriodStartCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportDealIdPeriodStartCompoundUniqueInput>;
export const RevenueReportDealIdPeriodStartCompoundUniqueInputObjectZodSchema = makeSchema();
