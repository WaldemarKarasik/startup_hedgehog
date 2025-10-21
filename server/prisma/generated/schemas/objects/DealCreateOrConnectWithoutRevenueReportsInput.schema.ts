import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealCreateWithoutRevenueReportsInputObjectSchema as DealCreateWithoutRevenueReportsInputObjectSchema } from './DealCreateWithoutRevenueReportsInput.schema';
import { DealUncheckedCreateWithoutRevenueReportsInputObjectSchema as DealUncheckedCreateWithoutRevenueReportsInputObjectSchema } from './DealUncheckedCreateWithoutRevenueReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DealCreateWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutRevenueReportsInputObjectSchema)])
}).strict();
export const DealCreateOrConnectWithoutRevenueReportsInputObjectSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutRevenueReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateOrConnectWithoutRevenueReportsInput>;
export const DealCreateOrConnectWithoutRevenueReportsInputObjectZodSchema = makeSchema();
