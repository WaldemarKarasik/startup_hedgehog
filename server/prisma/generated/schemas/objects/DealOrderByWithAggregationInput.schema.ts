import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DealCountOrderByAggregateInputObjectSchema as DealCountOrderByAggregateInputObjectSchema } from './DealCountOrderByAggregateInput.schema';
import { DealAvgOrderByAggregateInputObjectSchema as DealAvgOrderByAggregateInputObjectSchema } from './DealAvgOrderByAggregateInput.schema';
import { DealMaxOrderByAggregateInputObjectSchema as DealMaxOrderByAggregateInputObjectSchema } from './DealMaxOrderByAggregateInput.schema';
import { DealMinOrderByAggregateInputObjectSchema as DealMinOrderByAggregateInputObjectSchema } from './DealMinOrderByAggregateInput.schema';
import { DealSumOrderByAggregateInputObjectSchema as DealSumOrderByAggregateInputObjectSchema } from './DealSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  buyerId: SortOrderSchema.optional(),
  developerId: SortOrderSchema.optional(),
  fixedPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  hasRevenueShare: SortOrderSchema.optional(),
  paymentMethodId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  escrowPaymentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  escrowExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  activatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pausedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DealCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DealAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DealMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DealMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DealSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DealOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DealOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DealOrderByWithAggregationInput>;
export const DealOrderByWithAggregationInputObjectZodSchema = makeSchema();
