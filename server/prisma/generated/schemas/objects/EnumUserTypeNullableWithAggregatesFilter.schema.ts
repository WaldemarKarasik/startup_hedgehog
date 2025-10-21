import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NestedEnumUserTypeNullableWithAggregatesFilterObjectSchema as NestedEnumUserTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumUserTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserTypeNullableFilterObjectSchema as NestedEnumUserTypeNullableFilterObjectSchema } from './NestedEnumUserTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserTypeSchema.optional().nullable(),
  in: UserTypeSchema.array().optional().nullable(),
  notIn: UserTypeSchema.array().optional().nullable(),
  not: z.union([UserTypeSchema, z.lazy(() => NestedEnumUserTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumUserTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTypeNullableWithAggregatesFilter>;
export const EnumUserTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
