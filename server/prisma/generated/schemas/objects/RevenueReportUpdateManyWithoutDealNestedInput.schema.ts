import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportCreateWithoutDealInputObjectSchema as RevenueReportCreateWithoutDealInputObjectSchema } from './RevenueReportCreateWithoutDealInput.schema';
import { RevenueReportUncheckedCreateWithoutDealInputObjectSchema as RevenueReportUncheckedCreateWithoutDealInputObjectSchema } from './RevenueReportUncheckedCreateWithoutDealInput.schema';
import { RevenueReportCreateOrConnectWithoutDealInputObjectSchema as RevenueReportCreateOrConnectWithoutDealInputObjectSchema } from './RevenueReportCreateOrConnectWithoutDealInput.schema';
import { RevenueReportUpsertWithWhereUniqueWithoutDealInputObjectSchema as RevenueReportUpsertWithWhereUniqueWithoutDealInputObjectSchema } from './RevenueReportUpsertWithWhereUniqueWithoutDealInput.schema';
import { RevenueReportCreateManyDealInputEnvelopeObjectSchema as RevenueReportCreateManyDealInputEnvelopeObjectSchema } from './RevenueReportCreateManyDealInputEnvelope.schema';
import { RevenueReportWhereUniqueInputObjectSchema as RevenueReportWhereUniqueInputObjectSchema } from './RevenueReportWhereUniqueInput.schema';
import { RevenueReportUpdateWithWhereUniqueWithoutDealInputObjectSchema as RevenueReportUpdateWithWhereUniqueWithoutDealInputObjectSchema } from './RevenueReportUpdateWithWhereUniqueWithoutDealInput.schema';
import { RevenueReportUpdateManyWithWhereWithoutDealInputObjectSchema as RevenueReportUpdateManyWithWhereWithoutDealInputObjectSchema } from './RevenueReportUpdateManyWithWhereWithoutDealInput.schema';
import { RevenueReportScalarWhereInputObjectSchema as RevenueReportScalarWhereInputObjectSchema } from './RevenueReportScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RevenueReportCreateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportCreateWithoutDealInputObjectSchema).array(), z.lazy(() => RevenueReportUncheckedCreateWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUncheckedCreateWithoutDealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RevenueReportCreateOrConnectWithoutDealInputObjectSchema), z.lazy(() => RevenueReportCreateOrConnectWithoutDealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RevenueReportUpsertWithWhereUniqueWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUpsertWithWhereUniqueWithoutDealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RevenueReportCreateManyDealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RevenueReportWhereUniqueInputObjectSchema), z.lazy(() => RevenueReportWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RevenueReportWhereUniqueInputObjectSchema), z.lazy(() => RevenueReportWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RevenueReportWhereUniqueInputObjectSchema), z.lazy(() => RevenueReportWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RevenueReportWhereUniqueInputObjectSchema), z.lazy(() => RevenueReportWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RevenueReportUpdateWithWhereUniqueWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUpdateWithWhereUniqueWithoutDealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RevenueReportUpdateManyWithWhereWithoutDealInputObjectSchema), z.lazy(() => RevenueReportUpdateManyWithWhereWithoutDealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RevenueReportScalarWhereInputObjectSchema), z.lazy(() => RevenueReportScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RevenueReportUpdateManyWithoutDealNestedInputObjectSchema: z.ZodType<Prisma.RevenueReportUpdateManyWithoutDealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUpdateManyWithoutDealNestedInput>;
export const RevenueReportUpdateManyWithoutDealNestedInputObjectZodSchema = makeSchema();
