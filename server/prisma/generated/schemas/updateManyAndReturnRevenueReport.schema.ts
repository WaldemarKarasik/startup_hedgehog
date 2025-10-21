import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportSelectObjectSchema as RevenueReportSelectObjectSchema } from './objects/RevenueReportSelect.schema';
import { RevenueReportUpdateManyMutationInputObjectSchema as RevenueReportUpdateManyMutationInputObjectSchema } from './objects/RevenueReportUpdateManyMutationInput.schema';
import { RevenueReportWhereInputObjectSchema as RevenueReportWhereInputObjectSchema } from './objects/RevenueReportWhereInput.schema';

export const RevenueReportUpdateManyAndReturnSchema: z.ZodType<Prisma.RevenueReportUpdateManyAndReturnArgs> = z.object({ select: RevenueReportSelectObjectSchema.optional(), data: RevenueReportUpdateManyMutationInputObjectSchema, where: RevenueReportWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RevenueReportUpdateManyAndReturnArgs>;

export const RevenueReportUpdateManyAndReturnZodSchema = z.object({ select: RevenueReportSelectObjectSchema.optional(), data: RevenueReportUpdateManyMutationInputObjectSchema, where: RevenueReportWhereInputObjectSchema.optional() }).strict();