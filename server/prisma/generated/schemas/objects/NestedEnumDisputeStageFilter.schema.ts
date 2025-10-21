import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStageSchema } from '../enums/DisputeStage.schema'

const nestedenumdisputestagefilterSchema = z.object({
  equals: DisputeStageSchema.optional(),
  in: DisputeStageSchema.array().optional(),
  notIn: DisputeStageSchema.array().optional(),
  not: z.union([DisputeStageSchema, z.lazy(() => NestedEnumDisputeStageFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDisputeStageFilterObjectSchema: z.ZodType<Prisma.NestedEnumDisputeStageFilter> = nestedenumdisputestagefilterSchema as unknown as z.ZodType<Prisma.NestedEnumDisputeStageFilter>;
export const NestedEnumDisputeStageFilterObjectZodSchema = nestedenumdisputestagefilterSchema;
