import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { HasUsersOptionSchema } from '../enums/HasUsersOption.schema';
import { NestedEnumHasUsersOptionWithAggregatesFilterObjectSchema as NestedEnumHasUsersOptionWithAggregatesFilterObjectSchema } from './NestedEnumHasUsersOptionWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumHasUsersOptionFilterObjectSchema as NestedEnumHasUsersOptionFilterObjectSchema } from './NestedEnumHasUsersOptionFilter.schema'

const makeSchema = () => z.object({
  equals: HasUsersOptionSchema.optional(),
  in: HasUsersOptionSchema.array().optional(),
  notIn: HasUsersOptionSchema.array().optional(),
  not: z.union([HasUsersOptionSchema, z.lazy(() => NestedEnumHasUsersOptionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumHasUsersOptionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumHasUsersOptionFilterObjectSchema).optional()
}).strict();
export const EnumHasUsersOptionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumHasUsersOptionWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumHasUsersOptionWithAggregatesFilter>;
export const EnumHasUsersOptionWithAggregatesFilterObjectZodSchema = makeSchema();
