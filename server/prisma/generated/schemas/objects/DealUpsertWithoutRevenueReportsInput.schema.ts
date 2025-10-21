import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealUpdateWithoutRevenueReportsInputObjectSchema as DealUpdateWithoutRevenueReportsInputObjectSchema } from './DealUpdateWithoutRevenueReportsInput.schema';
import { DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema as DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema } from './DealUncheckedUpdateWithoutRevenueReportsInput.schema';
import { DealCreateWithoutRevenueReportsInputObjectSchema as DealCreateWithoutRevenueReportsInputObjectSchema } from './DealCreateWithoutRevenueReportsInput.schema';
import { DealUncheckedCreateWithoutRevenueReportsInputObjectSchema as DealUncheckedCreateWithoutRevenueReportsInputObjectSchema } from './DealUncheckedCreateWithoutRevenueReportsInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DealUpdateWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema)]),
  create: z.union([z.lazy(() => DealCreateWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutRevenueReportsInputObjectSchema)]),
  where: z.lazy(() => DealWhereInputObjectSchema).optional()
}).strict();
export const DealUpsertWithoutRevenueReportsInputObjectSchema: z.ZodType<Prisma.DealUpsertWithoutRevenueReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpsertWithoutRevenueReportsInput>;
export const DealUpsertWithoutRevenueReportsInputObjectZodSchema = makeSchema();
