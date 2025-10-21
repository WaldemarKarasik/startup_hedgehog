import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  flags: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  findings: SortOrderSchema.optional(),
  actions: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  completedAt: SortOrderSchema.optional()
}).strict();
export const AuditCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditCountOrderByAggregateInput>;
export const AuditCountOrderByAggregateInputObjectZodSchema = makeSchema();
