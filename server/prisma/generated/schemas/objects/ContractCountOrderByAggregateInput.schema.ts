import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  templateVersion: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  pdfUrl: SortOrderSchema.optional(),
  fixedPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  signatures: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  signedAt: SortOrderSchema.optional()
}).strict();
export const ContractCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContractCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractCountOrderByAggregateInput>;
export const ContractCountOrderByAggregateInputObjectZodSchema = makeSchema();
