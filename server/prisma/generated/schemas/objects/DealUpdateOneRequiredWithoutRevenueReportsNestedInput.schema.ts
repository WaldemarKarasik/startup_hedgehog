import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutRevenueReportsInputObjectSchema as DealCreateWithoutRevenueReportsInputObjectSchema } from './DealCreateWithoutRevenueReportsInput.schema';
import { DealUncheckedCreateWithoutRevenueReportsInputObjectSchema as DealUncheckedCreateWithoutRevenueReportsInputObjectSchema } from './DealUncheckedCreateWithoutRevenueReportsInput.schema';
import { DealCreateOrConnectWithoutRevenueReportsInputObjectSchema as DealCreateOrConnectWithoutRevenueReportsInputObjectSchema } from './DealCreateOrConnectWithoutRevenueReportsInput.schema';
import { DealUpsertWithoutRevenueReportsInputObjectSchema as DealUpsertWithoutRevenueReportsInputObjectSchema } from './DealUpsertWithoutRevenueReportsInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateToOneWithWhereWithoutRevenueReportsInputObjectSchema as DealUpdateToOneWithWhereWithoutRevenueReportsInputObjectSchema } from './DealUpdateToOneWithWhereWithoutRevenueReportsInput.schema';
import { DealUpdateWithoutRevenueReportsInputObjectSchema as DealUpdateWithoutRevenueReportsInputObjectSchema } from './DealUpdateWithoutRevenueReportsInput.schema';
import { DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema as DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema } from './DealUncheckedUpdateWithoutRevenueReportsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutRevenueReportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutRevenueReportsInputObjectSchema).optional(),
  upsert: z.lazy(() => DealUpsertWithoutRevenueReportsInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DealUpdateToOneWithWhereWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUpdateWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema)]).optional()
}).strict();
export const DealUpdateOneRequiredWithoutRevenueReportsNestedInputObjectSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutRevenueReportsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateOneRequiredWithoutRevenueReportsNestedInput>;
export const DealUpdateOneRequiredWithoutRevenueReportsNestedInputObjectZodSchema = makeSchema();
