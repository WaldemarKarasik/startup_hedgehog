import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const RevenueReportCreateauditFlagsInputObjectSchema: z.ZodType<Prisma.RevenueReportCreateauditFlagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportCreateauditFlagsInput>;
export const RevenueReportCreateauditFlagsInputObjectZodSchema = makeSchema();
