import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './objects/RevenueReportSelect.schema';
import { RevenueReportIncludeObjectSchema as RevenueReportIncludeObjectSchema } from './objects/RevenueReportInclude.schema';
import { RevenueReportUpdateInputObjectSchema as RevenueReportUpdateInputObjectSchema } from './objects/RevenueReportUpdateInput.schema';
import { RevenueReportUncheckedUpdateInputObjectSchema as RevenueReportUncheckedUpdateInputObjectSchema } from './objects/RevenueReportUncheckedUpdateInput.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './objects/RevenueReportWhereUniqueInput.schema';

export const RevenueReportUpdateOneSchema: z.ZodType<Prisma.RevenueReportUpdateArgs> = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), data: z.union([RevenueReportUpdateInputObjectSchema, RevenueReportUncheckedUpdateInputObjectSchema]), where: RevenueReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RevenueReportUpdateArgs>;

export const RevenueReportUpdateOneZodSchema = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), data: z.union([RevenueReportUpdateInputObjectSchema, RevenueReportUncheckedUpdateInputObjectSchema]), where: RevenueReportWhereUniqueInputObjectSchema }).strict();