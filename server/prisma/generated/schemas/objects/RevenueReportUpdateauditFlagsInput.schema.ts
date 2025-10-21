import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const RevenueReportUpdateauditFlagsInputObjectSchema: z.ZodType<Prisma.RevenueReportUpdateauditFlagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUpdateauditFlagsInput>;
export const RevenueReportUpdateauditFlagsInputObjectZodSchema = makeSchema();
