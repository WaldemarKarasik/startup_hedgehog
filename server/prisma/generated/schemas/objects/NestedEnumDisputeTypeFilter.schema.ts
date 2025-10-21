import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeTypeSchema } from '../enums/DisputeType.schema'

const nestedenumdisputetypefilterSchema = z.object({
  equals: DisputeTypeSchema.optional(),
  in: DisputeTypeSchema.array().optional(),
  notIn: DisputeTypeSchema.array().optional(),
  not: z.union([DisputeTypeSchema, z.lazy(() => NestedEnumDisputeTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDisputeTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumDisputeTypeFilter> = nestedenumdisputetypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumDisputeTypeFilter>;
export const NestedEnumDisputeTypeFilterObjectZodSchema = nestedenumdisputetypefilterSchema;
