import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'passwordHash', 'role', 'firstName', 'lastName', 'phone', 'avatar', 'bio', 'userType', 'legalName', 'inn', 'legalBasis', 'bankDetails', 'payoutMethod', 'payoutDetails', 'reputation', 'trustScore', 'rating', 'reviewCount', 'isVerified', 'isSuspended', 'suspendedReason', 'lastActiveAt', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;