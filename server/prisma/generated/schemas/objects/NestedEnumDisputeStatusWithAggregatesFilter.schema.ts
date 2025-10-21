import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDisputeStatusFilterObjectSchema as NestedEnumDisputeStatusFilterObjectSchema } from './NestedEnumDisputeStatusFilter.schema'

const nestedenumdisputestatuswithaggregatesfilterSchema = z.object({
  equals: DisputeStatusSchema.optional(),
  in: DisputeStatusSchema.array().optional(),
  notIn: DisputeStatusSchema.array().optional(),
  not: z.union([DisputeStatusSchema, z.lazy(() => NestedEnumDisputeStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDisputeStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDisputeStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumDisputeStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDisputeStatusWithAggregatesFilter> = nestedenumdisputestatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDisputeStatusWithAggregatesFilter>;
export const NestedEnumDisputeStatusWithAggregatesFilterObjectZodSchema = nestedenumdisputestatuswithaggregatesfilterSchema;
