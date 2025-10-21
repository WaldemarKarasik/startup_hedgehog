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
import { DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInputObjectSchema as DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInput.schema';
import { ProductUncheckedUpdateManyWithoutDeveloperNestedInputObjectSchema as ProductUncheckedUpdateManyWithoutDeveloperNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutDeveloperNestedInput.schema';
import { DealUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema as DealUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema } from './DealUncheckedUpdateManyWithoutBuyerNestedInput.schema';
import { DealUncheckedUpdateManyWithoutDeveloperNestedInputObjectSchema as DealUncheckedUpdateManyWithoutDeveloperNestedInputObjectSchema } from './DealUncheckedUpdateManyWithoutDeveloperNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema as ReviewUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutAuthorNestedInput.schema';
import { DisputeUncheckedUpdateManyWithoutInitiatorNestedInputObjectSchema as DisputeUncheckedUpdateManyWithoutInitiatorNestedInputObjectSchema } from './DisputeUncheckedUpdateManyWithoutInitiatorNestedInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema as NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserNestedInput.schema'

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
  application: z.lazy(() => DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  developedProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutDeveloperNestedInputObjectSchema).optional(),
  purchasedDeals: z.lazy(() => DealUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema).optional(),
  soldDeals: z.lazy(() => DealUncheckedUpdateManyWithoutDeveloperNestedInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeUncheckedUpdateManyWithoutInitiatorNestedInputObjectSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutReceivedReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutReceivedReviewsInput>;
export const UserUncheckedUpdateWithoutReceivedReviewsInputObjectZodSchema = makeSchema();
