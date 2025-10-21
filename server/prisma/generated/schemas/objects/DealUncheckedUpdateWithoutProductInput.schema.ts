import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DealStatusSchema } from '../enums/DealStatus.schema';
import { EnumDealStatusFieldUpdateOperationsInputObjectSchema as EnumDealStatusFieldUpdateOperationsInputObjectSchema } from './EnumDealStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ContractUncheckedUpdateOneWithoutDealNestedInputObjectSchema as ContractUncheckedUpdateOneWithoutDealNestedInputObjectSchema } from './ContractUncheckedUpdateOneWithoutDealNestedInput.schema';
import { TransactionUncheckedUpdateManyWithoutDealNestedInputObjectSchema as TransactionUncheckedUpdateManyWithoutDealNestedInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutDealNestedInput.schema';
import { RevenueReportUncheckedUpdateManyWithoutDealNestedInputObjectSchema as RevenueReportUncheckedUpdateManyWithoutDealNestedInputObjectSchema } from './RevenueReportUncheckedUpdateManyWithoutDealNestedInput.schema';
import { DisputeUncheckedUpdateManyWithoutDealNestedInputObjectSchema as DisputeUncheckedUpdateManyWithoutDealNestedInputObjectSchema } from './DisputeUncheckedUpdateManyWithoutDealNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  buyerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  developerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fixedPrice: z.union([z.number(), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  revenueSharePercent: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  revenueShareDuration: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportPeriod: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  criticalSLA: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  normalSLA: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  hasRevenueShare: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentMethodId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  escrowPaymentId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  escrowExpiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([DealStatusSchema, z.lazy(() => EnumDealStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  activatedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pausedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  completedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  contract: z.lazy(() => ContractUncheckedUpdateOneWithoutDealNestedInputObjectSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutDealNestedInputObjectSchema).optional(),
  revenueReports: z.lazy(() => RevenueReportUncheckedUpdateManyWithoutDealNestedInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeUncheckedUpdateManyWithoutDealNestedInputObjectSchema).optional()
}).strict();
export const DealUncheckedUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.DealUncheckedUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUncheckedUpdateWithoutProductInput>;
export const DealUncheckedUpdateWithoutProductInputObjectZodSchema = makeSchema();
