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
export const DisputeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DisputeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeMaxOrderByAggregateInput>;
export const DisputeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
