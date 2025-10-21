import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { AuditTypeSchema } from '../enums/AuditType.schema';
import { AuditStatusSchema } from '../enums/AuditStatus.schema';
import { AuditCreateflagsInputObjectSchema as AuditCreateflagsInputObjectSchema } from './AuditCreateflagsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  dealId: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  type: AuditTypeSchema,
  status: AuditStatusSchema.optional(),
  flags: z.union([z.lazy(() => AuditCreateflagsInputObjectSchema), z.string().array()]),
  priority: z.string(),
  findings: z.string().optional().nullable(),
  actions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  completedAt: z.coerce.date().optional().nullable()
}).strict();
export const AuditCreateInputObjectSchema: z.ZodType<Prisma.AuditCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditCreateInput>;
export const AuditCreateInputObjectZodSchema = makeSchema();
