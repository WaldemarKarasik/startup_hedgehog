import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { NestedEnumDisputeStageFilterObjectSchema as NestedEnumDisputeStageFilterObjectSchema } from './NestedEnumDisputeStageFilter.schema'

const makeSchema = () => z.object({
  equals: DisputeStageSchema.optional(),
  in: DisputeStageSchema.array().optional(),
  notIn: DisputeStageSchema.array().optional(),
  not: z.union([DisputeStageSchema, z.lazy(() => NestedEnumDisputeStageFilterObjectSchema)]).optional()
}).strict();
export const EnumDisputeStageFilterObjectSchema: z.ZodType<Prisma.EnumDisputeStageFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDisputeStageFilter>;
export const EnumDisputeStageFilterObjectZodSchema = makeSchema();
