import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { NestedEnumDisputeTypeFilterObjectSchema as NestedEnumDisputeTypeFilterObjectSchema } from './NestedEnumDisputeTypeFilter.schema'

const makeSchema = () => z.object({
  equals: DisputeTypeSchema.optional(),
  in: DisputeTypeSchema.array().optional(),
  notIn: DisputeTypeSchema.array().optional(),
  not: z.union([DisputeTypeSchema, z.lazy(() => NestedEnumDisputeTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumDisputeTypeFilterObjectSchema: z.ZodType<Prisma.EnumDisputeTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeTypeFilter>;
export const EnumDisputeTypeFilterObjectZodSchema = makeSchema();
