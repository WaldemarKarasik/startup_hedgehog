import * as z from 'zod';

import { UserRoleSchema } from '../../enums/UserRole.schema';
import { UserTypeSchema } from '../../enums/UserType.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    role: UserRoleSchema,
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string().nullable(),
    avatar: z.string().nullable(),
    bio: z.string().nullable(),
    userType: UserTypeSchema.nullable(),
    legalName: z.string().nullable(),
    inn: z.string().nullable(),
    legalBasis: z.string().nullable(),
    bankDetails: z.unknown().nullable(),
    payoutMethod: z.string().nullable(),
    payoutDetails: z.unknown().nullable(),
    reputation: z.number().int(),
    trustScore: z.number().int(),
    rating: z.number(),
    reviewCount: z.number().int(),
    isVerified: z.boolean(),
    isSuspended: z.boolean(),
    suspendedReason: z.string().nullable(),
    lastActiveAt: z.date(),
    application: z.unknown().nullable(),
    developedProducts: z.array(z.unknown()),
    purchasedDeals: z.array(z.unknown()),
    soldDeals: z.array(z.unknown()),
    reviews: z.array(z.unknown()),
    receivedReviews: z.array(z.unknown()),
    disputes: z.array(z.unknown()),
    notifications: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
