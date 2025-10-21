import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealStatusSchema } from '../enums/DealStatus.schema';
import { ProductCreateNestedOneWithoutDealsInputObjectSchema as ProductCreateNestedOneWithoutDealsInputObjectSchema } from './ProductCreateNestedOneWithoutDealsInput.schema';
import { UserCreateNestedOneWithoutPurchasedDealsInputObjectSchema as UserCreateNestedOneWithoutPurchasedDealsInputObjectSchema } from './UserCreateNestedOneWithoutPurchasedDealsInput.schema';
import { ContractCreateNestedOneWithoutDealInputObjectSchema as ContractCreateNestedOneWithoutDealInputObjectSchema } from './ContractCreateNestedOneWithoutDealInput.schema';
import { TransactionCreateNestedManyWithoutDealInputObjectSchema as TransactionCreateNestedManyWithoutDealInputObjectSchema } from './TransactionCreateNestedManyWithoutDealInput.schema';
import { RevenueReportCreateNestedManyWithoutDealInputObjectSchema as RevenueReportCreateNestedManyWithoutDealInputObjectSchema } from './RevenueReportCreateNestedManyWithoutDealInput.schema';
import { DisputeCreateNestedManyWithoutDealInputObjectSchema as DisputeCreateNestedManyWithoutDealInputObjectSchema } from './DisputeCreateNestedManyWithoutDealInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  fixedPrice: z.number().optional().nullable(),
  revenueSharePercent: z.number().int(),
  revenueShareDuration: z.string(),
  supportPeriod: z.number().int(),
  criticalSLA: z.number().int(),
  normalSLA: z.number().int(),
  hasRevenueShare: z.boolean().optional(),
  paymentMethodId: z.string().optional().nullable(),
  escrowPaymentId: z.string().optional().nullable(),
  escrowExpiresAt: z.coerce.date().optional().nullable(),
  status: DealStatusSchema.optional(),
  activatedAt: z.coerce.date().optional().nullable(),
  pausedAt: z.coerce.date().optional().nullable(),
  completedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutDealsInputObjectSchema),
  buyer: z.lazy(() => UserCreateNestedOneWithoutPurchasedDealsInputObjectSchema),
  contract: z.lazy(() => ContractCreateNestedOneWithoutDealInputObjectSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutDealInputObjectSchema).optional(),
  revenueReports: z.lazy(() => RevenueReportCreateNestedManyWithoutDealInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeCreateNestedManyWithoutDealInputObjectSchema).optional()
}).strict();
export const DealCreateWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.DealCreateWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateWithoutDeveloperInput>;
export const DealCreateWithoutDeveloperInputObjectZodSchema = makeSchema();
