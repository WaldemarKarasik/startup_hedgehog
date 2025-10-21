import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditTypeSchema } from '../enums/AuditType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAuditTypeFilterObjectSchema as NestedEnumAuditTypeFilterObjectSchema } from './NestedEnumAuditTypeFilter.schema'

const nestedenumaudittypewithaggregatesfilterSchema = z.object({
  equals: AuditTypeSchema.optional(),
  in: AuditTypeSchema.array().optional(),
  notIn: AuditTypeSchema.array().optional(),
  not: z.union([AuditTypeSchema, z.lazy(() => NestedEnumAuditTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAuditTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAuditTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumAuditTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAuditTypeWithAggregatesFilter> = nestedenumaudittypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAuditTypeWithAggregatesFilter>;
export const NestedEnumAuditTypeWithAggregatesFilterObjectZodSchema = nestedenumaudittypewithaggregatesfilterSchema;
