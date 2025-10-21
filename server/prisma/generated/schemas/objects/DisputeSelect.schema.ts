import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealArgsObjectSchema as DealArgsObjectSchema } from './DealArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  deal: z.union([z.boolean(), z.lazy(() => DealArgsObjectSchema)]).optional(),
  initiatedBy: z.boolean().optional(),
  initiator: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  type: z.boolean().optional(),
  stage: z.boolean().optional(),
  status: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  evidenceUrls: z.boolean().optional(),
  resolution: z.boolean().optional(),
  platformAction: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  resolvedAt: z.boolean().optional()
}).strict();
export const DisputeSelectObjectSchema: z.ZodType<Prisma.DisputeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DisputeSelect>;
export const DisputeSelectObjectZodSchema = makeSchema();
