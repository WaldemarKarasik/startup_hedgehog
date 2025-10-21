import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportWhereInputObjectSchema as RevenueReportWhereInputObjectSchema } from './objects/RevenueReportWhereInput.schema';

export const RevenueReportDeleteManySchema: z.ZodType<Prisma.RevenueReportDeleteManyArgs> = z.object({ where: RevenueReportWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RevenueReportDeleteManyArgs>;

export const RevenueReportDeleteManyZodSchema = z.object({ where: RevenueReportWhereInputObjectSchema.optional() }).strict();