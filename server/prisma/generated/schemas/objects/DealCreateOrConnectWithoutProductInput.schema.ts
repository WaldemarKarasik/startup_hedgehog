import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealCreateWithoutProductInputObjectSchema as DealCreateWithoutProductInputObjectSchema } from './DealCreateWithoutProductInput.schema';
import { DealUncheckedCreateWithoutProductInputObjectSchema as DealUncheckedCreateWithoutProductInputObjectSchema } from './DealUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DealCreateWithoutProductInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const DealCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateOrConnectWithoutProductInput>;
export const DealCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
