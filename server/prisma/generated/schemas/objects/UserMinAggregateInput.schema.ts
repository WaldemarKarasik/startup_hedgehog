import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  email: z.literal(true).optional(),
  passwordHash: z.literal(true).optional(),
  role: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  avatar: z.literal(true).optional(),
  bio: z.literal(true).optional(),
  userType: z.literal(true).optional(),
  legalName: z.literal(true).optional(),
  inn: z.literal(true).optional(),
  legalBasis: z.literal(true).optional(),
  payoutMethod: z.literal(true).optional(),
  reputation: z.literal(true).optional(),
  trustScore: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  reviewCount: z.literal(true).optional(),
  isVerified: z.literal(true).optional(),
  isSuspended: z.literal(true).optional(),
  suspendedReason: z.literal(true).optional(),
  lastActiveAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const UserMinAggregateInputObjectSchema: z.ZodType<Prisma.UserMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserMinAggregateInputType>;
export const UserMinAggregateInputObjectZodSchema = makeSchema();
