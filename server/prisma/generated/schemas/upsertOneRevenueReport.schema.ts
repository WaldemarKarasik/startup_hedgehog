import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './objects/RevenueReportSelect.schema';
import { RevenueReportIncludeObjectSchema as RevenueReportIncludeObjectSchema } from './objects/RevenueReportInclude.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './objects/RevenueReportWhereUniqueInput.schema';
import { RevenueReportCreateInputObjectSchema as RevenueReportCreateInputObjectSchema } from './objects/RevenueReportCreateInput.schema';
import { RevenueReportUncheckedCreateInputObjectSchema as RevenueReportUncheckedCreateInputObjectSchema } from './objects/RevenueReportUncheckedCreateInput.schema';
import { RevenueReportUpdateInputObjectSchema as RevenueReportUpdateInputObjectSchema } from './objects/RevenueReportUpdateInput.schema';
import { RevenueReportUncheckedUpdateInputObjectSchema as RevenueReportUncheckedUpdateInputObjectSchema } from './objects/RevenueReportUncheckedUpdateInput.schema';

export const RevenueReportUpsertOneSchema: z.ZodType<Prisma.RevenueReportUpsertArgs> = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), where: RevenueReportWhereUniqueInputObjectSchema, create: z.union([ RevenueReportCreateInputObjectSchema, RevenueReportUncheckedCreateInputObjectSchema ]), update: z.union([ RevenueReportUpdateInputObjectSchema, RevenueReportUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RevenueReportUpsertArgs>;

export const RevenueReportUpsertOneZodSchema = z.object({ select: RevenueReportSelectObjectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), where: RevenueReportWhereUniqueInputObjectSchema, create: z.union([ RevenueReportCreateInputObjectSchema, RevenueReportUncheckedCreateInputObjectSchema ]), update: z.union([ RevenueReportUpdateInputObjectSchema, RevenueReportUncheckedUpdateInputObjectSchema ]) }).strict();