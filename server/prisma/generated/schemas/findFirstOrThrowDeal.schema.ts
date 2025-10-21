import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealIncludeObjectSchema as DealIncludeObjectSchema } from './objects/DealInclude.schema';
import { DealOrderByWithRelationInputObjectSchema as DealOrderByWithRelationInputObjectSchema } from './objects/DealOrderByWithRelationInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './objects/DealWhereInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './objects/DealWhereUniqueInput.schema';
import { DealScalarFieldEnumSchema } from './enums/DealScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DealFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DealSelect> = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    buyerId: z.boolean().optional(),
    buyer: z.boolean().optional(),
    developerId: z.boolean().optional(),
    developer: z.boolean().optional(),
    fixedPrice: z.boolean().optional(),
    revenueSharePercent: z.boolean().optional(),
    revenueShareDuration: z.boolean().optional(),
    supportPeriod: z.boolean().optional(),
    criticalSLA: z.boolean().optional(),
    normalSLA: z.boolean().optional(),
    hasRevenueShare: z.boolean().optional(),
    paymentMethodId: z.boolean().optional(),
    escrowPaymentId: z.boolean().optional(),
    escrowExpiresAt: z.boolean().optional(),
    status: z.boolean().optional(),
    activatedAt: z.boolean().optional(),
    pausedAt: z.boolean().optional(),
    completedAt: z.boolean().optional(),
    contract: z.boolean().optional(),
    transactions: z.boolean().optional(),
    revenueReports: z.boolean().optional(),
    disputes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DealSelect>;

export const DealFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    product: z.boolean().optional(),
    buyerId: z.boolean().optional(),
    buyer: z.boolean().optional(),
    developerId: z.boolean().optional(),
    developer: z.boolean().optional(),
    fixedPrice: z.boolean().optional(),
    revenueSharePercent: z.boolean().optional(),
    revenueShareDuration: z.boolean().optional(),
    supportPeriod: z.boolean().optional(),
    criticalSLA: z.boolean().optional(),
    normalSLA: z.boolean().optional(),
    hasRevenueShare: z.boolean().optional(),
    paymentMethodId: z.boolean().optional(),
    escrowPaymentId: z.boolean().optional(),
    escrowExpiresAt: z.boolean().optional(),
    status: z.boolean().optional(),
    activatedAt: z.boolean().optional(),
    pausedAt: z.boolean().optional(),
    completedAt: z.boolean().optional(),
    contract: z.boolean().optional(),
    transactions: z.boolean().optional(),
    revenueReports: z.boolean().optional(),
    disputes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DealFindFirstOrThrowSchema: z.ZodType<Prisma.DealFindFirstOrThrowArgs> = z.object({ select: DealFindFirstOrThrowSelectSchema.optional(), include: DealIncludeObjectSchema.optional(), orderBy: z.union([DealOrderByWithRelationInputObjectSchema, DealOrderByWithRelationInputObjectSchema.array()]).optional(), where: DealWhereInputObjectSchema.optional(), cursor: DealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DealScalarFieldEnumSchema, DealScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DealFindFirstOrThrowArgs>;

export const DealFindFirstOrThrowZodSchema = z.object({ select: DealFindFirstOrThrowSelectSchema.optional(), include: DealIncludeObjectSchema.optional(), orderBy: z.union([DealOrderByWithRelationInputObjectSchema, DealOrderByWithRelationInputObjectSchema.array()]).optional(), where: DealWhereInputObjectSchema.optional(), cursor: DealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DealScalarFieldEnumSchema, DealScalarFieldEnumSchema.array()]).optional() }).strict();