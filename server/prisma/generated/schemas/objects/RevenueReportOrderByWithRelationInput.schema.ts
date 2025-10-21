import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DealOrderByWithRelationInputObjectSchema as DealOrderByWithRelationInputObjectSchema } from './DealOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  periodStart: SortOrderSchema.optional(),
  periodEnd: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  grossRevenue: SortOrderSchema.optional(),
  returns: SortOrderSchema.optional(),
  fees: SortOrderSchema.optional(),
  netRevenue: SortOrderSchema.optional(),
  revenueShareAmount: SortOrderSchema.optional(),
  proofUrls: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  isAudited: SortOrderSchema.optional(),
  auditFlags: SortOrderSchema.optional(),
  submittedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verifiedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deal: z.lazy(() => DealOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RevenueReportOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RevenueReportOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportOrderByWithRelationInput>;
export const RevenueReportOrderByWithRelationInputObjectZodSchema = makeSchema();
