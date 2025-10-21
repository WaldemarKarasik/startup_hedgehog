import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './objects/RevenueReportSelect.schema';
import { RevenueReportIncludeObjectSchema as RevenueReportIncludeObjectSchema } from './objects/RevenueReportInclude.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './objects/RevenueReportWhereUniqueInput.schema';

export const RevenueReportFindUniqueSchema: z.ZodType<Prisma.RevenueReportFindUniqueArgs> = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), where: RevenueReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RevenueReportFindUniqueArgs>;

export const RevenueReportFindUniqueZodSchema = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), where: RevenueReportWhereUniqueInputObjectSchema }).strict();