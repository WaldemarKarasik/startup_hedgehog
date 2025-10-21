import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  dealId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  status: z.literal(true).optional(),
  priority: z.literal(true).optional(),
  findings: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  completedAt: z.literal(true).optional()
}).strict();
export const AuditMaxAggregateInputObjectSchema: z.ZodType<Prisma.AuditMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AuditMaxAggregateInputType>;
export const AuditMaxAggregateInputObjectZodSchema = makeSchema();
