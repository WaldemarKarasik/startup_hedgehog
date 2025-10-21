import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  transactions: z.boolean().optional(),
  revenueReports: z.boolean().optional(),
  disputes: z.boolean().optional()
}).strict();
export const DealCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DealCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DealCountOutputTypeSelect>;
export const DealCountOutputTypeSelectObjectZodSchema = makeSchema();
