import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DealOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DealOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DealOrderByRelationAggregateInput>;
export const DealOrderByRelationAggregateInputObjectZodSchema = makeSchema();
