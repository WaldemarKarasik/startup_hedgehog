import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DeveloperApplicationUncheckedCreateNestedOneWithoutUserInputObjectSchema as DeveloperApplicationUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedCreateNestedOneWithoutUserInput.schema';
import { ProductUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema as ProductUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutDeveloperInput.schema';
import { DealUncheckedCreateNestedManyWithoutBuyerInputObjectSchema as DealUncheckedCreateNestedManyWithoutBuyerInputObjectSchema } from './DealUncheckedCreateNestedManyWithoutBuyerInput.schema';
import { DealUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema as DealUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema } from './DealUncheckedCreateNestedManyWithoutDeveloperInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutAuthorInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutAuthorInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutTargetUserInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutTargetUserInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutTargetUserInput.schema';
import { DisputeUncheckedCreateNestedManyWithoutInitiatorInputObjectSchema as DisputeUncheckedCreateNestedManyWithoutInitiatorInputObjectSchema } from './DisputeUncheckedCreateNestedManyWithoutInitiatorInput.schema'

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
  application: z.lazy(() => DeveloperApplicationUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  developedProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema).optional(),
  purchasedDeals: z.lazy(() => DealUncheckedCreateNestedManyWithoutBuyerInputObjectSchema).optional(),
  soldDeals: z.lazy(() => DealUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  receivedReviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutTargetUserInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeUncheckedCreateNestedManyWithoutInitiatorInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput>;
export const UserUncheckedCreateWithoutNotificationsInputObjectZodSchema = makeSchema();
