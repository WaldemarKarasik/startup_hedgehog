import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema as EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NullableEnumUserTypeFieldUpdateOperationsInputObjectSchema as NullableEnumUserTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumUserTypeFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DeveloperApplicationUpdateOneWithoutUserNestedInputObjectSchema as DeveloperApplicationUpdateOneWithoutUserNestedInputObjectSchema } from './DeveloperApplicationUpdateOneWithoutUserNestedInput.schema';
import { ProductUpdateManyWithoutDeveloperNestedInputObjectSchema as ProductUpdateManyWithoutDeveloperNestedInputObjectSchema } from './ProductUpdateManyWithoutDeveloperNestedInput.schema';
import { DealUpdateManyWithoutBuyerNestedInputObjectSchema as DealUpdateManyWithoutBuyerNestedInputObjectSchema } from './DealUpdateManyWithoutBuyerNestedInput.schema';
import { DealUpdateManyWithoutDeveloperNestedInputObjectSchema as DealUpdateManyWithoutDeveloperNestedInputObjectSchema } from './DealUpdateManyWithoutDeveloperNestedInput.schema';
import { ReviewUpdateManyWithoutTargetUserNestedInputObjectSchema as ReviewUpdateManyWithoutTargetUserNestedInputObjectSchema } from './ReviewUpdateManyWithoutTargetUserNestedInput.schema';
import { DisputeUpdateManyWithoutInitiatorNestedInputObjectSchema as DisputeUpdateManyWithoutInitiatorNestedInputObjectSchema } from './DisputeUpdateManyWithoutInitiatorNestedInput.schema';
import { NotificationUpdateManyWithoutUserNestedInputObjectSchema as NotificationUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUpdateManyWithoutUserNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  avatar: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  userType: z.union([UserTypeSchema, z.lazy(() => NullableEnumUserTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  legalName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  inn: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  legalBasis: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bankDetails: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  payoutMethod: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  payoutDetails: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  reputation: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  trustScore: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  rating: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  reviewCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isSuspended: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  suspendedReason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  lastActiveAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  application: z.lazy(() => DeveloperApplicationUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  developedProducts: z.lazy(() => ProductUpdateManyWithoutDeveloperNestedInputObjectSchema).optional(),
  purchasedDeals: z.lazy(() => DealUpdateManyWithoutBuyerNestedInputObjectSchema).optional(),
  soldDeals: z.lazy(() => DealUpdateManyWithoutDeveloperNestedInputObjectSchema).optional(),
  receivedReviews: z.lazy(() => ReviewUpdateManyWithoutTargetUserNestedInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeUpdateManyWithoutInitiatorNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutReviewsInput>;
export const UserUpdateWithoutReviewsInputObjectZodSchema = makeSchema();
