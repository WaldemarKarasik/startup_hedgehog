import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './RevenueReportWhereUniqueInput.schema';
import { RevenueReportUpdateWithoutDealInputObjectSchema as RevenueReportUpdateWithoutDealInputObjectSchema } from './RevenueReportUpdateWithoutDealInput.schema';
import { RevenueReportUncheckedUpdateWithoutDealInputObjectSchema as RevenueReportUncheckedUpdateWithoutDealInputObjectSchema } from './RevenueReportUncheckedUpdateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RevenueReportWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RevenueReportUpdateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUncheckedUpdateWithoutDealInputObjectSchema)])
}).strict();
export const RevenueReportUpdateWithWhereUniqueWithoutDealInputObjectSchema: z.ZodType<Prisma.RevenueReportUpdateWithWhereUniqueWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUpdateWithWhereUniqueWithoutDealInput>;
export const RevenueReportUpdateWithWhereUniqueWithoutDealInputObjectZodSchema = makeSchema();
