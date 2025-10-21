import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumUserRoleFilterObjectSchema as EnumUserRoleFilterObjectSchema } from './EnumUserRoleFilter.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumUserTypeNullableFilterObjectSchema as EnumUserTypeNullableFilterObjectSchema } from './EnumUserTypeNullableFilter.schema';
import { UserTypeSchema } from '../enums/UserType.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DeveloperApplicationNullableScalarRelationFilterObjectSchema as DeveloperApplicationNullableScalarRelationFilterObjectSchema } from './DeveloperApplicationNullableScalarRelationFilter.schema';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './DeveloperApplicationWhereInput.schema';
import { ProductListRelationFilterObjectSchema as ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';
import { DealListRelationFilterObjectSchema as DealListRelationFilterObjectSchema } from './DealListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema as ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { DisputeListRelationFilterObjectSchema as DisputeListRelationFilterObjectSchema } from './DisputeListRelationFilter.schema';
import { NotificationListRelationFilterObjectSchema as NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), UserRoleSchema]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  avatar: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bio: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userType: z.union([z.lazy(() => EnumUserTypeNullableFilterObjectSchema), UserTypeSchema]).optional().nullable(),
  legalName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  inn: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  legalBasis: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bankDetails: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  payoutMethod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  payoutDetails: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  reputation: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  trustScore: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rating: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  reviewCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isSuspended: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  suspendedReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lastActiveAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  application: z.union([z.lazy(() => DeveloperApplicationNullableScalarRelationFilterObjectSchema), z.lazy(() => DeveloperApplicationWhereInputObjectSchema)]).optional(),
  developedProducts: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
  purchasedDeals: z.lazy(() => DealListRelationFilterObjectSchema).optional(),
  soldDeals: z.lazy(() => DealListRelationFilterObjectSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  receivedReviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
  disputes: z.lazy(() => DisputeListRelationFilterObjectSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
