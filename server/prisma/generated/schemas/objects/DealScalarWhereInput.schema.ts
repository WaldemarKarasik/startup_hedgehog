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
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const dealscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DealScalarWhereInputObjectSchema), z.lazy(() => DealScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DealScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DealScalarWhereInputObjectSchema), z.lazy(() => DealScalarWhereInputObjectSchema).array()]).optional(),
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
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DealScalarWhereInputObjectSchema: z.ZodType<Prisma.DealScalarWhereInput> = dealscalarwhereinputSchema as unknown as z.ZodType<Prisma.DealScalarWhereInput>;
export const DealScalarWhereInputObjectZodSchema = dealscalarwhereinputSchema;
