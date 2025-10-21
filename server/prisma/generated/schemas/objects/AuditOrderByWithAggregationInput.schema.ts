import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AuditCountOrderByAggregateInputObjectSchema as AuditCountOrderByAggregateInputObjectSchema } from './AuditCountOrderByAggregateInput.schema';
import { AuditMaxOrderByAggregateInputObjectSchema as AuditMaxOrderByAggregateInputObjectSchema } from './AuditMaxOrderByAggregateInput.schema';
import { AuditMinOrderByAggregateInputObjectSchema as AuditMinOrderByAggregateInputObjectSchema } from './AuditMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  flags: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  findings: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  actions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  completedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AuditCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AuditMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AuditMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AuditOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AuditOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditOrderByWithAggregationInput>;
export const AuditOrderByWithAggregationInputObjectZodSchema = makeSchema();
