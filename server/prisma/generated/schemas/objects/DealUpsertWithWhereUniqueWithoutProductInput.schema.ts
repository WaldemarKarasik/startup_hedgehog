import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithoutProductInputObjectSchema as DealUpdateWithoutProductInputObjectSchema } from './DealUpdateWithoutProductInput.schema';
import { DealUncheckedUpdateWithoutProductInputObjectSchema as DealUncheckedUpdateWithoutProductInputObjectSchema } from './DealUncheckedUpdateWithoutProductInput.schema';
import { DealCreateWithoutProductInputObjectSchema as DealCreateWithoutProductInputObjectSchema } from './DealCreateWithoutProductInput.schema';
import { DealUncheckedCreateWithoutProductInputObjectSchema as DealUncheckedCreateWithoutProductInputObjectSchema } from './DealUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DealUpdateWithoutProductInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => DealCreateWithoutProductInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const DealUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutProductInput>;
export const DealUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
