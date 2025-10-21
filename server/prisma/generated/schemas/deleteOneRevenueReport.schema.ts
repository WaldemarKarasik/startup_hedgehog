import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './objects/RevenueReportSelect.schema';
import { RevenueReportIncludeObjectSchema as RevenueReportIncludeObjectSchema } from './objects/RevenueReportInclude.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './objects/RevenueReportWhereUniqueInput.schema';

export const RevenueReportDeleteOneSchema: z.ZodType<Prisma.RevenueReportDeleteArgs> = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), where: RevenueReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RevenueReportDeleteArgs>;

export const RevenueReportDeleteOneZodSchema = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), where: RevenueReportWhereUniqueInputObjectSchema }).strict();