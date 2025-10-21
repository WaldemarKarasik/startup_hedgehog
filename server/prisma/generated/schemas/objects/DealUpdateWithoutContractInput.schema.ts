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
import { ProductUpdateOneRequiredWithoutDealsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutDealsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutDealsNestedInput.schema';
import { UserUpdateOneRequiredWithoutPurchasedDealsNestedInputObjectSchema as UserUpdateOneRequiredWithoutPurchasedDealsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPurchasedDealsNestedInput.schema';
import { UserUpdateOneRequiredWithoutSoldDealsNestedInputObjectSchema as UserUpdateOneRequiredWithoutSoldDealsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSoldDealsNestedInput.schema';
import { TransactionUpdateManyWithoutDealNestedInputObjectSchema as TransactionUpdateManyWithoutDealNestedInputObjectSchema } from './TransactionUpdateManyWithoutDealNestedInput.schema';
import { RevenueReportUpdateManyWithoutDealNestedInputObjectSchema as RevenueReportUpdateManyWithoutDealNestedInputObjectSchema } from './RevenueReportUpdateManyWithoutDealNestedInput.schema';
import { DisputeUpdateManyWithoutDealNestedInputObjectSchema as DisputeUpdateManyWithoutDealNestedInputObjectSchema } from './DisputeUpdateManyWithoutDealNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  product: z.lazy(() => ProductUpdateOneRequiredWithoutDealsNestedInputObjectSchema).optional(),
  buyer: z.lazy(() => UserUpdateOneRequiredWithoutPurchasedDealsNestedInputObjectSchema).optional(),
  developer: z.lazy(() => UserUpdateOneRequiredWithoutSoldDealsNestedInputObjectSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutDealNestedInputObjectSchema).optional(),
  revenueReports: z.lazy(() => RevenueReportUpdateManyWithoutDealNestedInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeUpdateManyWithoutDealNestedInputObjectSchema).optional()
}).strict();
export const DealUpdateWithoutContractInputObjectSchema: z.ZodType<Prisma.DealUpdateWithoutContractInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateWithoutContractInput>;
export const DealUpdateWithoutContractInputObjectZodSchema = makeSchema();
