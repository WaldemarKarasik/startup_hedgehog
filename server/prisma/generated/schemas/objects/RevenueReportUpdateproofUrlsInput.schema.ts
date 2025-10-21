import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const RevenueReportUpdateproofUrlsInputObjectSchema: z.ZodType<Prisma.RevenueReportUpdateproofUrlsInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUpdateproofUrlsInput>;
export const RevenueReportUpdateproofUrlsInputObjectZodSchema = makeSchema();
