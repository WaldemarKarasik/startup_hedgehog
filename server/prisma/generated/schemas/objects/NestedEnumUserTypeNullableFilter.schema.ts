import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserTypeSchema } from '../enums/UserType.schema'

const nestedenumusertypenullablefilterSchema = z.object({
  equals: UserTypeSchema.optional().nullable(),
  in: UserTypeSchema.array().optional().nullable(),
  notIn: UserTypeSchema.array().optional().nullable(),
  not: z.union([UserTypeSchema, z.lazy(() => NestedEnumUserTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumUserTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserTypeNullableFilter> = nestedenumusertypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserTypeNullableFilter>;
export const NestedEnumUserTypeNullableFilterObjectZodSchema = nestedenumusertypenullablefilterSchema;
