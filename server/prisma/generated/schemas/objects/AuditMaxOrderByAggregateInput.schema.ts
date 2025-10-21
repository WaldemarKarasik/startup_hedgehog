import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional(),
  findings: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  completedAt: SortOrderSchema.optional()
}).strict();
export const AuditMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditMaxOrderByAggregateInput>;
export const AuditMaxOrderByAggregateInputObjectZodSchema = makeSchema();
