import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { RevenueReportUpdateproofUrlsInputObjectSchema as RevenueReportUpdateproofUrlsInputObjectSchema } from './RevenueReportUpdateproofUrlsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema';
import { EnumRevenueReportStatusFieldUpdateOperationsInputObjectSchema as EnumRevenueReportStatusFieldUpdateOperationsInputObjectSchema } from './EnumRevenueReportStatusFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RevenueReportUpdateauditFlagsInputObjectSchema as RevenueReportUpdateauditFlagsInputObjectSchema } from './RevenueReportUpdateauditFlagsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodStart: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  periodEnd: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  grossRevenue: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  returns: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  fees: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  netRevenue: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  revenueShareAmount: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  proofUrls: z.union([z.lazy(() => RevenueReportUpdateproofUrlsInputObjectSchema), z.string().array()]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([RevenueReportStatusSchema, z.lazy(() => EnumRevenueReportStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  isAudited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  auditFlags: z.union([z.lazy(() => RevenueReportUpdateauditFlagsInputObjectSchema), z.string().array()]).optional(),
  submittedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  verifiedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RevenueReportUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.RevenueReportUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUpdateManyMutationInput>;
export const RevenueReportUpdateManyMutationInputObjectZodSchema = makeSchema();
