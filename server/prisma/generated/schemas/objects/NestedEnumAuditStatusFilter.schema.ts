import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditStatusSchema } from '../enums/AuditStatus.schema'

const nestedenumauditstatusfilterSchema = z.object({
  equals: AuditStatusSchema.optional(),
  in: AuditStatusSchema.array().optional(),
  notIn: AuditStatusSchema.array().optional(),
  not: z.union([AuditStatusSchema, z.lazy(() => NestedEnumAuditStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAuditStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumAuditStatusFilter> = nestedenumauditstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAuditStatusFilter>;
export const NestedEnumAuditStatusFilterObjectZodSchema = nestedenumauditstatusfilterSchema;
