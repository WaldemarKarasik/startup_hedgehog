import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditTypeSchema } from '../enums/AuditType.schema';
import { NestedEnumAuditTypeWithAggregatesFilterObjectSchema as NestedEnumAuditTypeWithAggregatesFilterObjectSchema } from './NestedEnumAuditTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAuditTypeFilterObjectSchema as NestedEnumAuditTypeFilterObjectSchema } from './NestedEnumAuditTypeFilter.schema'

const makeSchema = () => z.object({
  equals: AuditTypeSchema.optional(),
  in: AuditTypeSchema.array().optional(),
  notIn: AuditTypeSchema.array().optional(),
  not: z.union([AuditTypeSchema, z.lazy(() => NestedEnumAuditTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAuditTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAuditTypeFilterObjectSchema).optional()
}).strict();
export const EnumAuditTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAuditTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditTypeWithAggregatesFilter>;
export const EnumAuditTypeWithAggregatesFilterObjectZodSchema = makeSchema();
