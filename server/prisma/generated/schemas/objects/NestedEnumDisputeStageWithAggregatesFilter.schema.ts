import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDisputeStageFilterObjectSchema as NestedEnumDisputeStageFilterObjectSchema } from './NestedEnumDisputeStageFilter.schema'

const nestedenumdisputestagewithaggregatesfilterSchema = z.object({
  equals: DisputeStageSchema.optional(),
  in: DisputeStageSchema.array().optional(),
  notIn: DisputeStageSchema.array().optional(),
  not: z.union([DisputeStageSchema, z.lazy(() => NestedEnumDisputeStageWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDisputeStageFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDisputeStageFilterObjectSchema).optional()
}).strict();
export const NestedEnumDisputeStageWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDisputeStageWithAggregatesFilter> = nestedenumdisputestagewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDisputeStageWithAggregatesFilter>;
export const NestedEnumDisputeStageWithAggregatesFilterObjectZodSchema = nestedenumdisputestagewithaggregatesfilterSchema;
