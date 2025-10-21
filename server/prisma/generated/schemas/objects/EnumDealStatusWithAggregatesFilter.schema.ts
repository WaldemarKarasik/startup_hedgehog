import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealStatusSchema } from '../enums/DealStatus.schema';
import { NestedEnumDealStatusWithAggregatesFilterObjectSchema as NestedEnumDealStatusWithAggregatesFilterObjectSchema } from './NestedEnumDealStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumDealStatusFilterObjectSchema as NestedEnumDealStatusFilterObjectSchema } from './NestedEnumDealStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DealStatusSchema.optional(),
  in: DealStatusSchema.array().optional(),
  notIn: DealStatusSchema.array().optional(),
  not: z.union([DealStatusSchema, z.lazy(() => NestedEnumDealStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDealStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDealStatusFilterObjectSchema).optional()
}).strict();
export const EnumDealStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDealStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDealStatusWithAggregatesFilter>;
export const EnumDealStatusWithAggregatesFilterObjectZodSchema = makeSchema();
