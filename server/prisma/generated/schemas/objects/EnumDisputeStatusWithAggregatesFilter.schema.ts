import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { NestedEnumDisputeStatusWithAggregatesFilterObjectSchema as NestedEnumDisputeStatusWithAggregatesFilterObjectSchema } from './NestedEnumDisputeStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDisputeStatusFilterObjectSchema as NestedEnumDisputeStatusFilterObjectSchema } from './NestedEnumDisputeStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DisputeStatusSchema.optional(),
  in: DisputeStatusSchema.array().optional(),
  notIn: DisputeStatusSchema.array().optional(),
  not: z.union([DisputeStatusSchema, z.lazy(() => NestedEnumDisputeStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDisputeStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDisputeStatusFilterObjectSchema).optional()
}).strict();
export const EnumDisputeStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDisputeStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeStatusWithAggregatesFilter>;
export const EnumDisputeStatusWithAggregatesFilterObjectZodSchema = makeSchema();
