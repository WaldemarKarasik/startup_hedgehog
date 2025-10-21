import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    role: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    phone: z.boolean().optional(),
    avatar: z.boolean().optional(),
    bio: z.boolean().optional(),
    userType: z.boolean().optional(),
    legalName: z.boolean().optional(),
    inn: z.boolean().optional(),
    legalBasis: z.boolean().optional(),
    bankDetails: z.boolean().optional(),
    payoutMethod: z.boolean().optional(),
    payoutDetails: z.boolean().optional(),
    reputation: z.boolean().optional(),
    trustScore: z.boolean().optional(),
    rating: z.boolean().optional(),
    reviewCount: z.boolean().optional(),
    isVerified: z.boolean().optional(),
    isSuspended: z.boolean().optional(),
    suspendedReason: z.boolean().optional(),
    lastActiveAt: z.boolean().optional(),
    application: z.boolean().optional(),
    developedProducts: z.boolean().optional(),
    purchasedDeals: z.boolean().optional(),
    soldDeals: z.boolean().optional(),
    reviews: z.boolean().optional(),
    receivedReviews: z.boolean().optional(),
    disputes: z.boolean().optional(),
    notifications: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSelect>;

export const UserFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    passwordHash: z.boolean().optional(),
    role: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    phone: z.boolean().optional(),
    avatar: z.boolean().optional(),
    bio: z.boolean().optional(),
    userType: z.boolean().optional(),
    legalName: z.boolean().optional(),
    inn: z.boolean().optional(),
    legalBasis: z.boolean().optional(),
    bankDetails: z.boolean().optional(),
    payoutMethod: z.boolean().optional(),
    payoutDetails: z.boolean().optional(),
    reputation: z.boolean().optional(),
    trustScore: z.boolean().optional(),
    rating: z.boolean().optional(),
    reviewCount: z.boolean().optional(),
    isVerified: z.boolean().optional(),
    isSuspended: z.boolean().optional(),
    suspendedReason: z.boolean().optional(),
    lastActiveAt: z.boolean().optional(),
    application: z.boolean().optional(),
    developedProducts: z.boolean().optional(),
    purchasedDeals: z.boolean().optional(),
    soldDeals: z.boolean().optional(),
    reviews: z.boolean().optional(),
    receivedReviews: z.boolean().optional(),
    disputes: z.boolean().optional(),
    notifications: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindFirstOrThrowSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: UserIncludeObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserFindFirstOrThrowArgs>;

export const UserFindFirstOrThrowZodSchema = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: UserIncludeObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();