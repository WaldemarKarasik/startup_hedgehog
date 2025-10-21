import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  flags: z.boolean().optional(),
  priority: z.boolean().optional(),
  findings: z.boolean().optional(),
  actions: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  completedAt: z.boolean().optional()
}).strict();
export const AuditSelectObjectSchema: z.ZodType<Prisma.AuditSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuditSelect>;
export const AuditSelectObjectZodSchema = makeSchema();
