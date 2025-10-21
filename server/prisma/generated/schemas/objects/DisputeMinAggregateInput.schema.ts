import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  dealId: z.literal(true).optional(),
  initiatedBy: z.literal(true).optional(),
  type: z.literal(true).optional(),
  stage: z.literal(true).optional(),
  status: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  resolution: z.literal(true).optional(),
  platformAction: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  resolvedAt: z.literal(true).optional()
}).strict();
export const DisputeMinAggregateInputObjectSchema: z.ZodType<Prisma.DisputeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DisputeMinAggregateInputType>;
export const DisputeMinAggregateInputObjectZodSchema = makeSchema();
