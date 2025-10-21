import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ContractCountOrderByAggregateInputObjectSchema as ContractCountOrderByAggregateInputObjectSchema } from './ContractCountOrderByAggregateInput.schema';
import { ContractAvgOrderByAggregateInputObjectSchema as ContractAvgOrderByAggregateInputObjectSchema } from './ContractAvgOrderByAggregateInput.schema';
import { ContractMaxOrderByAggregateInputObjectSchema as ContractMaxOrderByAggregateInputObjectSchema } from './ContractMaxOrderByAggregateInput.schema';
import { ContractMinOrderByAggregateInputObjectSchema as ContractMinOrderByAggregateInputObjectSchema } from './ContractMinOrderByAggregateInput.schema';
import { ContractSumOrderByAggregateInputObjectSchema as ContractSumOrderByAggregateInputObjectSchema } from './ContractSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  templateVersion: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  pdfUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fixedPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  signatures: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  signedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ContractCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ContractAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ContractMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ContractMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ContractSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ContractOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ContractOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractOrderByWithAggregationInput>;
export const ContractOrderByWithAggregationInputObjectZodSchema = makeSchema();
