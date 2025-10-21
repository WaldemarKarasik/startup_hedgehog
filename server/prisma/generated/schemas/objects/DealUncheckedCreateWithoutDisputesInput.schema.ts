import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealStatusSchema } from '../enums/DealStatus.schema';
import { ContractUncheckedCreateNestedOneWithoutDealInputObjectSchema as ContractUncheckedCreateNestedOneWithoutDealInputObjectSchema } from './ContractUncheckedCreateNestedOneWithoutDealInput.schema';
import { TransactionUncheckedCreateNestedManyWithoutDealInputObjectSchema as TransactionUncheckedCreateNestedManyWithoutDealInputObjectSchema } from './TransactionUncheckedCreateNestedManyWithoutDealInput.schema';
import { RevenueReportUncheckedCreateNestedManyWithoutDealInputObjectSchema as RevenueReportUncheckedCreateNestedManyWithoutDealInputObjectSchema } from './RevenueReportUncheckedCreateNestedManyWithoutDealInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  buyerId: z.string(),
  developerId: z.string(),
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
  contract: z.lazy(() => ContractUncheckedCreateNestedOneWithoutDealInputObjectSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutDealInputObjectSchema).optional(),
  revenueReports: z.lazy(() => RevenueReportUncheckedCreateNestedManyWithoutDealInputObjectSchema).optional()
}).strict();
export const DealUncheckedCreateWithoutDisputesInputObjectSchema: z.ZodType<Prisma.DealUncheckedCreateWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUncheckedCreateWithoutDisputesInput>;
export const DealUncheckedCreateWithoutDisputesInputObjectZodSchema = makeSchema();
