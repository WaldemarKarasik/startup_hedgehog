import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditTypeSchema } from '../enums/AuditType.schema'

const nestedenumaudittypefilterSchema = z.object({
  equals: AuditTypeSchema.optional(),
  in: AuditTypeSchema.array().optional(),
  notIn: AuditTypeSchema.array().optional(),
  not: z.union([AuditTypeSchema, z.lazy(() => NestedEnumAuditTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAuditTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumAuditTypeFilter> = nestedenumaudittypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAuditTypeFilter>;
export const NestedEnumAuditTypeFilterObjectZodSchema = nestedenumaudittypefilterSchema;
