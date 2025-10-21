import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { NestedEnumDisputeStatusFilterObjectSchema as NestedEnumDisputeStatusFilterObjectSchema } from './NestedEnumDisputeStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DisputeStatusSchema.optional(),
  in: DisputeStatusSchema.array().optional(),
  notIn: DisputeStatusSchema.array().optional(),
  not: z.union([DisputeStatusSchema, z.lazy(() => NestedEnumDisputeStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumDisputeStatusFilterObjectSchema: z.ZodType<Prisma.EnumDisputeStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeStatusFilter>;
export const EnumDisputeStatusFilterObjectZodSchema = makeSchema();
