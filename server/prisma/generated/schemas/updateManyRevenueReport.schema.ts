import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportUpdateManyMutationInputObjectSchema as RevenueReportUpdateManyMutationInputObjectSchema } from './objects/RevenueReportUpdateManyMutationInput.schema';
import { RevenueReportWhereInputObjectSchema as RevenueReportWhereInputObjectSchema } from './objects/RevenueReportWhereInput.schema';

export const RevenueReportUpdateManySchema: z.ZodType<Prisma.RevenueReportUpdateManyArgs> = z.object({ data: RevenueReportUpdateManyMutationInputObjectSchema, where: RevenueReportWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RevenueReportUpdateManyArgs>;

export const RevenueReportUpdateManyZodSchema = z.object({ data: RevenueReportUpdateManyMutationInputObjectSchema, where: RevenueReportWhereInputObjectSchema.optional() }).strict();