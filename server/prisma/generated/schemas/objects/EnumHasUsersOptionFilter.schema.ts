import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { HasUsersOptionSchema } from '../enums/HasUsersOption.schema';
import { NestedEnumHasUsersOptionFilterObjectSchema as NestedEnumHasUsersOptionFilterObjectSchema } from './NestedEnumHasUsersOptionFilter.schema'

const makeSchema = () => z.object({
  equals: HasUsersOptionSchema.optional(),
  in: HasUsersOptionSchema.array().optional(),
  notIn: HasUsersOptionSchema.array().optional(),
  not: z.union([HasUsersOptionSchema, z.lazy(() => NestedEnumHasUsersOptionFilterObjectSchema)]).optional()
}).strict();
export const EnumHasUsersOptionFilterObjectSchema: z.ZodType<Prisma.EnumHasUsersOptionFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumHasUsersOptionFilter>;
export const EnumHasUsersOptionFilterObjectZodSchema = makeSchema();
