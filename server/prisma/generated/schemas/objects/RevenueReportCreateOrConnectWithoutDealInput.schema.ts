import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './RevenueReportWhereUniqueInput.schema';
import { RevenueReportCreateWithoutDealInputObjectSchema as RevenueReportCreateWithoutDealInputObjectSchema } from './RevenueReportCreateWithoutDealInput.schema';
import { RevenueReportUncheckedCreateWithoutDealInputObjectSchema as RevenueReportUncheckedCreateWithoutDealInputObjectSchema } from './RevenueReportUncheckedCreateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RevenueReportWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RevenueReportCreateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUncheckedCreateWithoutDealInputObjectSchema)])
}).strict();
export const RevenueReportCreateOrConnectWithoutDealInputObjectSchema: z.ZodType<Prisma.RevenueReportCreateOrConnectWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportCreateOrConnectWithoutDealInput>;
export const RevenueReportCreateOrConnectWithoutDealInputObjectZodSchema = makeSchema();
