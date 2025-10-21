import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditStatusSchema } from '../enums/AuditStatus.schema';
import { NestedEnumAuditStatusFilterObjectSchema as NestedEnumAuditStatusFilterObjectSchema } from './NestedEnumAuditStatusFilter.schema'

const makeSchema = () => z.object({
  equals: AuditStatusSchema.optional(),
  in: AuditStatusSchema.array().optional(),
  notIn: AuditStatusSchema.array().optional(),
  not: z.union([AuditStatusSchema, z.lazy(() => NestedEnumAuditStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumAuditStatusFilterObjectSchema: z.ZodType<Prisma.EnumAuditStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditStatusFilter>;
export const EnumAuditStatusFilterObjectZodSchema = makeSchema();
