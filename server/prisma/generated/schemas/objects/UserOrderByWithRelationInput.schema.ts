import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DeveloperApplicationOrderByWithRelationInputObjectSchema as DeveloperApplicationOrderByWithRelationInputObjectSchema } from './DeveloperApplicationOrderByWithRelationInput.schema';
import { ProductOrderByRelationAggregateInputObjectSchema as ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema';
import { DealOrderByRelationAggregateInputObjectSchema as DealOrderByRelationAggregateInputObjectSchema } from './DealOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema as ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { DisputeOrderByRelationAggregateInputObjectSchema as DisputeOrderByRelationAggregateInputObjectSchema } from './DisputeOrderByRelationAggregateInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema as NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  avatar: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bio: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  legalName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  inn: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  legalBasis: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bankDetails: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  payoutMethod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  payoutDetails: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reputation: SortOrderSchema.optional(),
  trustScore: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  reviewCount: SortOrderSchema.optional(),
  isVerified: SortOrderSchema.optional(),
  isSuspended: SortOrderSchema.optional(),
  suspendedReason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastActiveAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  application: z.lazy(() => DeveloperApplicationOrderByWithRelationInputObjectSchema).optional(),
  developedProducts: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional(),
  purchasedDeals: z.lazy(() => DealOrderByRelationAggregateInputObjectSchema).optional(),
  soldDeals: z.lazy(() => DealOrderByRelationAggregateInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  receivedReviews: z.lazy(() => ReviewOrderByRelationAggregateInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeOrderByRelationAggregateInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
