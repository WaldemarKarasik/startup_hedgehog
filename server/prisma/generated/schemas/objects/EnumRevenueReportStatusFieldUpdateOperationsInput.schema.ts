import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema'

const makeSchema = () => z.object({
  set: RevenueReportStatusSchema.optional()
}).strict();
export const EnumRevenueReportStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRevenueReportStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRevenueReportStatusFieldUpdateOperationsInput>;
export const EnumRevenueReportStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
