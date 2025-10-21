import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserTypeSchema } from '../enums/UserType.schema';
import { NestedEnumUserTypeNullableFilterObjectSchema as NestedEnumUserTypeNullableFilterObjectSchema } from './NestedEnumUserTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserTypeSchema.optional().nullable(),
  in: UserTypeSchema.array().optional().nullable(),
  notIn: UserTypeSchema.array().optional().nullable(),
  not: z.union([UserTypeSchema, z.lazy(() => NestedEnumUserTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumUserTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumUserTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTypeNullableFilter>;
export const EnumUserTypeNullableFilterObjectZodSchema = makeSchema();
