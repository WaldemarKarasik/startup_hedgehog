import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportCreateManyInputObjectSchema as RevenueReportCreateManyInputObjectSchema } from './objects/RevenueReportCreateManyInput.schema';

export const RevenueReportCreateManySchema: z.ZodType<Prisma.RevenueReportCreateManyArgs> = z.object({ data: z.union([ RevenueReportCreateManyInputObjectSchema, z.array(RevenueReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RevenueReportCreateManyArgs>;

export const RevenueReportCreateManyZodSchema = z.object({ data: z.union([ RevenueReportCreateManyInputObjectSchema, z.array(RevenueReportCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();