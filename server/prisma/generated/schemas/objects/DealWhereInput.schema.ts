import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumDealStatusFilterObjectSchema as EnumDealStatusFilterObjectSchema } from './EnumDealStatusFilter.schema';
import { DealStatusSchema } from '../enums/DealStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProductScalarRelationFilterObjectSchema as ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ContractNullableScalarRelationFilterObjectSchema as ContractNullableScalarRelationFilterObjectSchema } from './ContractNullableScalarRelationFilter.schema';
import { ContractWhereInputObjectSchema as ContractWhereInputObjectSchema } from './ContractWhereInput.schema';
import { TransactionListRelationFilterObjectSchema as TransactionListRelationFilterObjectSchema } from './TransactionListRelationFilter.schema';
import { RevenueReportListRelationFilterObjectSchema as RevenueReportListRelationFilterObjectSchema } from './RevenueReportListRelationFilter.schema';
import { DisputeListRelationFilterObjectSchema as DisputeListRelationFilterObjectSchema } from './DisputeListRelationFilter.schema'

const dealwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DealWhereInputObjectSchema), z.lazy(() => DealWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DealWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DealWhereInputObjectSchema), z.lazy(() => DealWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  buyerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  developerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fixedPrice: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  revenueSharePercent: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  revenueShareDuration: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  supportPeriod: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  criticalSLA: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  normalSLA: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hasRevenueShare: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  paymentMethodId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  escrowPaymentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  escrowExpiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumDealStatusFilterObjectSchema), DealStatusSchema]).optional(),
  activatedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  pausedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  completedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional(),
  buyer: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  developer: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  contract: z.union([z.lazy(() => ContractNullableScalarRelationFilterObjectSchema), z.lazy(() => ContractWhereInputObjectSchema)]).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterObjectSchema).optional(),
  revenueReports: z.lazy(() => RevenueReportListRelationFilterObjectSchema).optional(),
  disputes: z.lazy(() => DisputeListRelationFilterObjectSchema).optional()
}).strict();
export const DealWhereInputObjectSchema: z.ZodType<Prisma.DealWhereInput> = dealwhereinputSchema as unknown as z.ZodType<Prisma.DealWhereInput>;
export const DealWhereInputObjectZodSchema = dealwhereinputSchema;
