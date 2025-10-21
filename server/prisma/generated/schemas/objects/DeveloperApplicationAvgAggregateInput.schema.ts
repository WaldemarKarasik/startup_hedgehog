import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  customizationPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional()
}).strict();
export const DeveloperApplicationAvgAggregateInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationAvgAggregateInputType>;
export const DeveloperApplicationAvgAggregateInputObjectZodSchema = makeSchema();
