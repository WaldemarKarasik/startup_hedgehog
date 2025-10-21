import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportCreateManyDealInputObjectSchema as RevenueReportCreateManyDealInputObjectSchema } from './RevenueReportCreateManyDealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RevenueReportCreateManyDealInputObjectSchema), z.lazy(() => RevenueReportCreateManyDealInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RevenueReportCreateManyDealInputEnvelopeObjectSchema: z.ZodType<Prisma.RevenueReportCreateManyDealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportCreateManyDealInputEnvelope>;
export const RevenueReportCreateManyDealInputEnvelopeObjectZodSchema = makeSchema();
