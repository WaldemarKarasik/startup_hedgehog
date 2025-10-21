import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditTypeSchema } from '../enums/AuditType.schema';
import { NestedEnumAuditTypeFilterObjectSchema as NestedEnumAuditTypeFilterObjectSchema } from './NestedEnumAuditTypeFilter.schema'

const makeSchema = () => z.object({
  equals: AuditTypeSchema.optional(),
  in: AuditTypeSchema.array().optional(),
  notIn: AuditTypeSchema.array().optional(),
  not: z.union([AuditTypeSchema, z.lazy(() => NestedEnumAuditTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumAuditTypeFilterObjectSchema: z.ZodType<Prisma.EnumAuditTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditTypeFilter>;
export const EnumAuditTypeFilterObjectZodSchema = makeSchema();
