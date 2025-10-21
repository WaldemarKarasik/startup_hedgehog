import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fixedPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional()
}).strict();
export const ContractSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContractSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractSumOrderByAggregateInput>;
export const ContractSumOrderByAggregateInputObjectZodSchema = makeSchema();
