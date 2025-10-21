import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const RevenueReportCreateproofUrlsInputObjectSchema: z.ZodType<Prisma.RevenueReportCreateproofUrlsInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportCreateproofUrlsInput>;
export const RevenueReportCreateproofUrlsInputObjectZodSchema = makeSchema();
