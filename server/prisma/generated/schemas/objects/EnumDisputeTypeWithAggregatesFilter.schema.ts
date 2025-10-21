import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { NestedEnumDisputeTypeWithAggregatesFilterObjectSchema as NestedEnumDisputeTypeWithAggregatesFilterObjectSchema } from './NestedEnumDisputeTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDisputeTypeFilterObjectSchema as NestedEnumDisputeTypeFilterObjectSchema } from './NestedEnumDisputeTypeFilter.schema'

const makeSchema = () => z.object({
  equals: DisputeTypeSchema.optional(),
  in: DisputeTypeSchema.array().optional(),
  notIn: DisputeTypeSchema.array().optional(),
  not: z.union([DisputeTypeSchema, z.lazy(() => NestedEnumDisputeTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDisputeTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDisputeTypeFilterObjectSchema).optional()
}).strict();
export const EnumDisputeTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDisputeTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeTypeWithAggregatesFilter>;
export const EnumDisputeTypeWithAggregatesFilterObjectZodSchema = makeSchema();
