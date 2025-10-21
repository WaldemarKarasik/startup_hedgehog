import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DisputeCountOrderByAggregateInputObjectSchema as DisputeCountOrderByAggregateInputObjectSchema } from './DisputeCountOrderByAggregateInput.schema';
import { DisputeMaxOrderByAggregateInputObjectSchema as DisputeMaxOrderByAggregateInputObjectSchema } from './DisputeMaxOrderByAggregateInput.schema';
import { DisputeMinOrderByAggregateInputObjectSchema as DisputeMinOrderByAggregateInputObjectSchema } from './DisputeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  initiatedBy: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  stage: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  evidenceUrls: SortOrderSchema.optional(),
  resolution: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  platformAction: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  resolvedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => DisputeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DisputeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DisputeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DisputeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DisputeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeOrderByWithAggregationInput>;
export const DisputeOrderByWithAggregationInputObjectZodSchema = makeSchema();
