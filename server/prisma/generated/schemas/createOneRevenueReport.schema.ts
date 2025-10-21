import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './objects/RevenueReportSelect.schema';
import { RevenueReportIncludeObjectSchema as RevenueReportIncludeObjectSchema } from './objects/RevenueReportInclude.schema';
import { RevenueReportCreateInputObjectSchema as RevenueReportCreateInputObjectSchema } from './objects/RevenueReportCreateInput.schema';
import { RevenueReportUncheckedCreateInputObjectSchema as RevenueReportUncheckedCreateInputObjectSchema } from './objects/RevenueReportUncheckedCreateInput.schema';

export const RevenueReportCreateOneSchema: z.ZodType<Prisma.RevenueReportCreateArgs> = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), data: z.union([RevenueReportCreateInputObjectSchema, RevenueReportUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RevenueReportCreateArgs>;

export const RevenueReportCreateOneZodSchema = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), data: z.union([RevenueReportCreateInputObjectSchema, RevenueReportUncheckedCreateInputObjectSchema]) }).strict();