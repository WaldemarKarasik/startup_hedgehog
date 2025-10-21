import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportCreateproofUrlsInputObjectSchema as RevenueReportCreateproofUrlsInputObjectSchema } from './RevenueReportCreateproofUrlsInput.schema';
import { RevenueReportStatusSchema } from '../enums/RevenueReportStatus.schema';
import { RevenueReportCreateauditFlagsInputObjectSchema as RevenueReportCreateauditFlagsInputObjectSchema } from './RevenueReportCreateauditFlagsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date().optional().nullable(),
  grossRevenue: z.number(),
  returns: z.number(),
  fees: z.number(),
  netRevenue: z.number(),
  revenueShareAmount: z.number(),
  proofUrls: z.union([z.lazy(() => RevenueReportCreateproofUrlsInputObjectSchema), z.string().array()]).optional(),
  notes: z.string().optional().nullable(),
  status: RevenueReportStatusSchema.optional(),
  isAudited: z.boolean().optional(),
  auditFlags: z.union([z.lazy(() => RevenueReportCreateauditFlagsInputObjectSchema), z.string().array()]).optional(),
  submittedAt: z.coerce.date().optional().nullable(),
  verifiedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const RevenueReportCreateWithoutDealInputObjectSchema: z.ZodType<Prisma.RevenueReportCreateWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportCreateWithoutDealInput>;
export const RevenueReportCreateWithoutDealInputObjectZodSchema = makeSchema();
