import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './objects/RevenueReportSelect.schema';
import { RevenueReportCreateManyInputObjectSchema as RevenueReportCreateManyInputObjectSchema } from './objects/RevenueReportCreateManyInput.schema';

export const RevenueReportCreateManyAndReturnSchema: z.ZodType<Prisma.RevenueReportCreateManyAndReturnArgs> = z.object({ select: RevenueReportSelectObjectSchema.optional(), data: z.union([ RevenueReportCreateManyInputObjectSchema, z.array(RevenueReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RevenueReportCreateManyAndReturnArgs>;

export const RevenueReportCreateManyAndReturnZodSchema = z.object({ select: RevenueReportSelectObjectSchema.optional(), data: z.union([ RevenueReportCreateManyInputObjectSchema, z.array(RevenueReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();