import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DisputeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DisputeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeOrderByRelationAggregateInput>;
export const DisputeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
