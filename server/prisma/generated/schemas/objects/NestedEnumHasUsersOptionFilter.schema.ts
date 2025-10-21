import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { HasUsersOptionSchema } from '../enums/HasUsersOption.schema'

const nestedenumhasusersoptionfilterSchema = z.object({
  equals: HasUsersOptionSchema.optional(),
  in: HasUsersOptionSchema.array().optional(),
  notIn: HasUsersOptionSchema.array().optional(),
  not: z.union([HasUsersOptionSchema, z.lazy(() => NestedEnumHasUsersOptionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumHasUsersOptionFilterObjectSchema: z.ZodType<Prisma.NestedEnumHasUsersOptionFilter> = nestedenumhasusersoptionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumHasUsersOptionFilter>;
export const NestedEnumHasUsersOptionFilterObjectZodSchema = nestedenumhasusersoptionfilterSchema;
