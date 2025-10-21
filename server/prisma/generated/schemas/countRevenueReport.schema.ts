import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportOrderByWithRelationInputObjectSchema as RevenueReportOrderByWithRelationInputObjectSchema } from './objects/RevenueReportOrderByWithRelationInput.schema';
import { RevenueReportWhereInputObjectSchema as RevenueReportWhereInputObjectSchema } from './objects/RevenueReportWhereInput.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './objects/RevenueReportWhereUniqueInput.schema';
import { RevenueReportCountAggregateInputObjectSchema as RevenueReportCountAggregateInputObjectSchema } from './objects/RevenueReportCountAggregateInput.schema';

export const RevenueReportCountSchema: z.ZodType<Prisma.RevenueReportCountArgs> = z.object({ orderBy: z.union([RevenueReportOrderByWithRelationInputObjectSchema, RevenueReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: RevenueReportWhereInputObjectSchema.optional(), cursor: RevenueReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RevenueReportCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RevenueReportCountArgs>;

export const RevenueReportCountZodSchema = z.object({ orderBy: z.union([RevenueReportOrderByWithRelationInputObjectSchema, RevenueReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: RevenueReportWhereInputObjectSchema.optional(), cursor: RevenueReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RevenueReportCountAggregateInputObjectSchema ]).optional() }).strict();