import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { RevenueReportIncludeObjectSchema as RevenueReportIncludeObjectSchema } from './objects/RevenueReportInclude.schema';
import { RevenueReportOrderByWithRelationInputObjectSchema as RevenueReportOrderByWithRelationInputObjectSchema } from './objects/RevenueReportOrderByWithRelationInput.schema';
import { RevenueReportWhereInputObjectSchema as RevenueReportWhereInputObjectSchema } from './objects/RevenueReportWhereInput.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './objects/RevenueReportWhereUniqueInput.schema';
import { RevenueReportScalarFieldEnumSchema } from './enums/RevenueReportScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RevenueReportFindManySelectSchema: z.ZodType<Prisma.RevenueReportSelect> = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    deal: z.boolean().optional(),
    periodStart: z.boolean().optional(),
    periodEnd: z.boolean().optional(),
    grossRevenue: z.boolean().optional(),
    returns: z.boolean().optional(),
    fees: z.boolean().optional(),
    netRevenue: z.boolean().optional(),
    revenueShareAmount: z.boolean().optional(),
    proofUrls: z.boolean().optional(),
    notes: z.boolean().optional(),
    status: z.boolean().optional(),
    isAudited: z.boolean().optional(),
    auditFlags: z.boolean().optional(),
    submittedAt: z.boolean().optional(),
    verifiedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RevenueReportSelect>;

export const RevenueReportFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    deal: z.boolean().optional(),
    periodStart: z.boolean().optional(),
    periodEnd: z.boolean().optional(),
    grossRevenue: z.boolean().optional(),
    returns: z.boolean().optional(),
    fees: z.boolean().optional(),
    netRevenue: z.boolean().optional(),
    revenueShareAmount: z.boolean().optional(),
    proofUrls: z.boolean().optional(),
    notes: z.boolean().optional(),
    status: z.boolean().optional(),
    isAudited: z.boolean().optional(),
    auditFlags: z.boolean().optional(),
    submittedAt: z.boolean().optional(),
    verifiedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const RevenueReportFindManySchema: z.ZodType<Prisma.RevenueReportFindManyArgs> = z.object({ select: RevenueReportFindManySelectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), orderBy: z.union([RevenueReportOrderByWithRelationInputObjectSchema, RevenueReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: RevenueReportWhereInputObjectSchema.optional(), cursor: RevenueReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RevenueReportScalarFieldEnumSchema, RevenueReportScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RevenueReportFindManyArgs>;

export const RevenueReportFindManyZodSchema = z.object({ select: RevenueReportFindManySelectSchema.optional(), include: RevenueReportIncludeObjectSchema.optional(), orderBy: z.union([RevenueReportOrderByWithRelationInputObjectSchema, RevenueReportOrderByWithRelationInputObjectSchema.array()]).optional(), where: RevenueReportWhereInputObjectSchema.optional(), cursor: RevenueReportWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RevenueReportScalarFieldEnumSchema, RevenueReportScalarFieldEnumSchema.array()]).optional() }).strict();