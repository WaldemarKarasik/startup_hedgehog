import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutRevenueReportsInputObjectSchema as DealCreateWithoutRevenueReportsInputObjectSchema } from './DealCreateWithoutRevenueReportsInput.schema';
import { DealUncheckedCreateWithoutRevenueReportsInputObjectSchema as DealUncheckedCreateWithoutRevenueReportsInputObjectSchema } from './DealUncheckedCreateWithoutRevenueReportsInput.schema';
import { DealCreateOrConnectWithoutRevenueReportsInputObjectSchema as DealCreateOrConnectWithoutRevenueReportsInputObjectSchema } from './DealCreateOrConnectWithoutRevenueReportsInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutRevenueReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutRevenueReportsInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional()
}).strict();
export const DealCreateNestedOneWithoutRevenueReportsInputObjectSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutRevenueReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateNestedOneWithoutRevenueReportsInput>;
export const DealCreateNestedOneWithoutRevenueReportsInputObjectZodSchema = makeSchema();
