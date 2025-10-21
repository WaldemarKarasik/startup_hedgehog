import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './RevenueReportWhereUniqueInput.schema';
import { RevenueReportUpdateWithoutDealInputObjectSchema as RevenueReportUpdateWithoutDealInputObjectSchema } from './RevenueReportUpdateWithoutDealInput.schema';
import { RevenueReportUncheckedUpdateWithoutDealInputObjectSchema as RevenueReportUncheckedUpdateWithoutDealInputObjectSchema } from './RevenueReportUncheckedUpdateWithoutDealInput.schema';
import { RevenueReportCreateWithoutDealInputObjectSchema as RevenueReportCreateWithoutDealInputObjectSchema } from './RevenueReportCreateWithoutDealInput.schema';
import { RevenueReportUncheckedCreateWithoutDealInputObjectSchema as RevenueReportUncheckedCreateWithoutDealInputObjectSchema } from './RevenueReportUncheckedCreateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RevenueReportWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RevenueReportUpdateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUncheckedUpdateWithoutDealInputObjectSchema)]),
  create: z.union([z.lazy(() => RevenueReportCreateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUncheckedCreateWithoutDealInputObjectSchema)])
}).strict();
export const RevenueReportUpsertWithWhereUniqueWithoutDealInputObjectSchema: z.ZodType<Prisma.RevenueReportUpsertWithWhereUniqueWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUpsertWithWhereUniqueWithoutDealInput>;
export const RevenueReportUpsertWithWhereUniqueWithoutDealInputObjectZodSchema = makeSchema();
