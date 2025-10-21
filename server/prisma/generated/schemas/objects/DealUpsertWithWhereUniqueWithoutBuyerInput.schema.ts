import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithoutBuyerInputObjectSchema as DealUpdateWithoutBuyerInputObjectSchema } from './DealUpdateWithoutBuyerInput.schema';
import { DealUncheckedUpdateWithoutBuyerInputObjectSchema as DealUncheckedUpdateWithoutBuyerInputObjectSchema } from './DealUncheckedUpdateWithoutBuyerInput.schema';
import { DealCreateWithoutBuyerInputObjectSchema as DealCreateWithoutBuyerInputObjectSchema } from './DealCreateWithoutBuyerInput.schema';
import { DealUncheckedCreateWithoutBuyerInputObjectSchema as DealUncheckedCreateWithoutBuyerInputObjectSchema } from './DealUncheckedCreateWithoutBuyerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DealUpdateWithoutBuyerInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutBuyerInputObjectSchema)]),
  create: z.union([z.lazy(() => DealCreateWithoutBuyerInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutBuyerInputObjectSchema)])
}).strict();
export const DealUpsertWithWhereUniqueWithoutBuyerInputObjectSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutBuyerInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutBuyerInput>;
export const DealUpsertWithWhereUniqueWithoutBuyerInputObjectZodSchema = makeSchema();
