import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealCreateWithoutTransactionsInputObjectSchema as DealCreateWithoutTransactionsInputObjectSchema } from './DealCreateWithoutTransactionsInput.schema';
import { DealUncheckedCreateWithoutTransactionsInputObjectSchema as DealUncheckedCreateWithoutTransactionsInputObjectSchema } from './DealUncheckedCreateWithoutTransactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DealCreateWithoutTransactionsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutTransactionsInputObjectSchema)])
}).strict();
export const DealCreateOrConnectWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateOrConnectWithoutTransactionsInput>;
export const DealCreateOrConnectWithoutTransactionsInputObjectZodSchema = makeSchema();
