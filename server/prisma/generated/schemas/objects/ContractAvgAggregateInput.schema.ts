import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  fixedPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional(),
  supportPeriod: z.literal(true).optional(),
  criticalSLA: z.literal(true).optional(),
  normalSLA: z.literal(true).optional()
}).strict();
export const ContractAvgAggregateInputObjectSchema: z.ZodType<Prisma.ContractAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContractAvgAggregateInputType>;
export const ContractAvgAggregateInputObjectZodSchema = makeSchema();
