import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportCreateWithoutDealInputObjectSchema as RevenueReportCreateWithoutDealInputObjectSchema } from './RevenueReportCreateWithoutDealInput.schema';
import { RevenueReportUncheckedCreateWithoutDealInputObjectSchema as RevenueReportUncheckedCreateWithoutDealInputObjectSchema } from './RevenueReportUncheckedCreateWithoutDealInput.schema';
import { RevenueReportCreateOrConnectWithoutDealInputObjectSchema as RevenueReportCreateOrConnectWithoutDealInputObjectSchema } from './RevenueReportCreateOrConnectWithoutDealInput.schema';
import { RevenueReportCreateManyDealInputEnvelopeObjectSchema as RevenueReportCreateManyDealInputEnvelopeObjectSchema } from './RevenueReportCreateManyDealInputEnvelope.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './RevenueReportWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RevenueReportCreateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportCreateWithoutDealInputObjectSchema).array(), z.lazy(() => RevenueReportUncheckedCreateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUncheckedCreateWithoutDealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RevenueReportCreateOrConnectWithoutDealInputObjectSchema), z.lazy(() => RevenueReportCreateOrConnectWithoutDealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RevenueReportCreateManyDealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RevenueReportWhereUniqueInputObjectSchema), z.lazy(() => RevenueReportWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RevenueReportUncheckedCreateNestedManyWithoutDealInputObjectSchema: z.ZodType<Prisma.RevenueReportUncheckedCreateNestedManyWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUncheckedCreateNestedManyWithoutDealInput>;
export const RevenueReportUncheckedCreateNestedManyWithoutDealInputObjectZodSchema = makeSchema();
