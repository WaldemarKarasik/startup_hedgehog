import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema'

const nestedenumdisputestatusfilterSchema = z.object({
  equals: DisputeStatusSchema.optional(),
  in: DisputeStatusSchema.array().optional(),
  notIn: DisputeStatusSchema.array().optional(),
  not: z.union([DisputeStatusSchema, z.lazy(() => NestedEnumDisputeStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDisputeStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumDisputeStatusFilter> = nestedenumdisputestatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDisputeStatusFilter>;
export const NestedEnumDisputeStatusFilterObjectZodSchema = nestedenumdisputestatusfilterSchema;
