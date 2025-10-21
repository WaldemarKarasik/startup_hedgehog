import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditStatusSchema } from '../enums/AuditStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAuditStatusFilterObjectSchema as NestedEnumAuditStatusFilterObjectSchema } from './NestedEnumAuditStatusFilter.schema'

const nestedenumauditstatuswithaggregatesfilterSchema = z.object({
  equals: AuditStatusSchema.optional(),
  in: AuditStatusSchema.array().optional(),
  notIn: AuditStatusSchema.array().optional(),
  not: z.union([AuditStatusSchema, z.lazy(() => NestedEnumAuditStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAuditStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAuditStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumAuditStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAuditStatusWithAggregatesFilter> = nestedenumauditstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAuditStatusWithAggregatesFilter>;
export const NestedEnumAuditStatusWithAggregatesFilterObjectZodSchema = nestedenumauditstatuswithaggregatesfilterSchema;
