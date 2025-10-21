import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { RevenueReportScalarWhereInputObjectSchema as RevenueReportScalarWhereInputObjectSchema } from './RevenueReportScalarWhereInput.schema';
import { RevenueReportUpdateManyMutationInputObjectSchema as RevenueReportUpdateManyMutationInputObjectSchema } from './RevenueReportUpdateManyMutationInput.schema';
import { RevenueReportUncheckedUpdateManyWithoutDealInputObjectSchema as RevenueReportUncheckedUpdateManyWithoutDealInputObjectSchema } from './RevenueReportUncheckedUpdateManyWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RevenueReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RevenueReportUpdateManyMutationInputObjectSchema), z.lazy(() => RevenueReportUncheckedUpdateManyWithoutDealInputObjectSchema)])
}).strict();
export const RevenueReportUpdateManyWithWhereWithoutDealInputObjectSchema: z.ZodType<Prisma.RevenueReportUpdateManyWithWhereWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.RevenueReportUpdateManyWithWhereWithoutDealInput>;
export const RevenueReportUpdateManyWithWhereWithoutDealInputObjectZodSchema = makeSchema();
