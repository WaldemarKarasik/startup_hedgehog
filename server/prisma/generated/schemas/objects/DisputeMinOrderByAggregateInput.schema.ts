import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  initiatedBy: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  stage: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  resolution: SortOrderSchema.optional(),
  platformAction: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  resolvedAt: SortOrderSchema.optional()
}).strict();
export const DisputeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DisputeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeMinOrderByAggregateInput>;
export const DisputeMinOrderByAggregateInputObjectZodSchema = makeSchema();
