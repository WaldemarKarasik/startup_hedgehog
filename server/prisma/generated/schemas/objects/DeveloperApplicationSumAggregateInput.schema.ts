import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  customizationPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional()
}).strict();
export const DeveloperApplicationSumAggregateInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationSumAggregateInputType>;
export const DeveloperApplicationSumAggregateInputObjectZodSchema = makeSchema();
