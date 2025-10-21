import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserTypeNullableFilterObjectSchema as NestedEnumUserTypeNullableFilterObjectSchema } from './NestedEnumUserTypeNullableFilter.schema'

const nestedenumusertypenullablewithaggregatesfilterSchema = z.object({
  equals: UserTypeSchema.optional().nullable(),
  in: UserTypeSchema.array().optional().nullable(),
  notIn: UserTypeSchema.array().optional().nullable(),
  not: z.union([UserTypeSchema, z.lazy(() => NestedEnumUserTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserTypeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserTypeNullableWithAggregatesFilter> = nestedenumusertypenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserTypeNullableWithAggregatesFilter>;
export const NestedEnumUserTypeNullableWithAggregatesFilterObjectZodSchema = nestedenumusertypenullablewithaggregatesfilterSchema;
