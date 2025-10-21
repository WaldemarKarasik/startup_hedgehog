import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DeveloperApplicationCreateNestedOneWithoutUserInputObjectSchema as DeveloperApplicationCreateNestedOneWithoutUserInputObjectSchema } from './DeveloperApplicationCreateNestedOneWithoutUserInput.schema';
import { ProductCreateNestedManyWithoutDeveloperInputObjectSchema as ProductCreateNestedManyWithoutDeveloperInputObjectSchema } from './ProductCreateNestedManyWithoutDeveloperInput.schema';
import { DealCreateNestedManyWithoutBuyerInputObjectSchema as DealCreateNestedManyWithoutBuyerInputObjectSchema } from './DealCreateNestedManyWithoutBuyerInput.schema';
import { DealCreateNestedManyWithoutDeveloperInputObjectSchema as DealCreateNestedManyWithoutDeveloperInputObjectSchema } from './DealCreateNestedManyWithoutDeveloperInput.schema';
import { ReviewCreateNestedManyWithoutTargetUserInputObjectSchema as ReviewCreateNestedManyWithoutTargetUserInputObjectSchema } from './ReviewCreateNestedManyWithoutTargetUserInput.schema';
import { DisputeCreateNestedManyWithoutInitiatorInputObjectSchema as DisputeCreateNestedManyWithoutInitiatorInputObjectSchema } from './DisputeCreateNestedManyWithoutInitiatorInput.schema';
import { NotificationCreateNestedManyWithoutUserInputObjectSchema as NotificationCreateNestedManyWithoutUserInputObjectSchema } from './NotificationCreateNestedManyWithoutUserInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  passwordHash: z.string(),
  role: UserRoleSchema.optional(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  userType: UserTypeSchema.optional().nullable(),
  legalName: z.string().optional().nullable(),
  inn: z.string().optional().nullable(),
  legalBasis: z.string().optional().nullable(),
  bankDetails: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  payoutMethod: z.string().optional().nullable(),
  payoutDetails: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  reputation: z.number().int().optional(),
  trustScore: z.number().int().optional(),
  rating: z.number().optional(),
  reviewCount: z.number().int().optional(),
  isVerified: z.boolean().optional(),
  isSuspended: z.boolean().optional(),
  suspendedReason: z.string().optional().nullable(),
  lastActiveAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  application: z.lazy(() => DeveloperApplicationCreateNestedOneWithoutUserInputObjectSchema).optional(),
  developedProducts: z.lazy(() => ProductCreateNestedManyWithoutDeveloperInputObjectSchema).optional(),
  purchasedDeals: z.lazy(() => DealCreateNestedManyWithoutBuyerInputObjectSchema).optional(),
  soldDeals: z.lazy(() => DealCreateNestedManyWithoutDeveloperInputObjectSchema).optional(),
  receivedReviews: z.lazy(() => ReviewCreateNestedManyWithoutTargetUserInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeCreateNestedManyWithoutInitiatorInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutReviewsInput>;
export const UserCreateWithoutReviewsInputObjectZodSchema = makeSchema();
