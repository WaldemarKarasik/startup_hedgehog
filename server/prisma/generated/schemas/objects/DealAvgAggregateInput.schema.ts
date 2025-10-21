import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  fixedPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional(),
  supportPeriod: z.literal(true).optional(),
  criticalSLA: z.literal(true).optional(),
  normalSLA: z.literal(true).optional()
}).strict();
export const DealAvgAggregateInputObjectSchema: z.ZodType<Prisma.DealAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DealAvgAggregateInputType>;
export const DealAvgAggregateInputObjectZodSchema = makeSchema();
