import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationArgsObjectSchema as DeveloperApplicationArgsObjectSchema } from './DeveloperApplicationArgs.schema';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { DealFindManySchema as DealFindManySchema } from '../findManyDeal.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { DisputeFindManySchema as DisputeFindManySchema } from '../findManyDispute.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
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
  application: z.union([z.boolean(), z.lazy(() => DeveloperApplicationArgsObjectSchema)]).optional(),
  developedProducts: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
  purchasedDeals: z.union([z.boolean(), z.lazy(() => DealFindManySchema)]).optional(),
  soldDeals: z.union([z.boolean(), z.lazy(() => DealFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  receivedReviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  disputes: z.union([z.boolean(), z.lazy(() => DisputeFindManySchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
