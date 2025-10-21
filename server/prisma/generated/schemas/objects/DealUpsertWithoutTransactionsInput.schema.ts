import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealUpdateWithoutTransactionsInputObjectSchema as DealUpdateWithoutTransactionsInputObjectSchema } from './DealUpdateWithoutTransactionsInput.schema';
import { DealUncheckedUpdateWithoutTransactionsInputObjectSchema as DealUncheckedUpdateWithoutTransactionsInputObjectSchema } from './DealUncheckedUpdateWithoutTransactionsInput.schema';
import { DealCreateWithoutTransactionsInputObjectSchema as DealCreateWithoutTransactionsInputObjectSchema } from './DealCreateWithoutTransactionsInput.schema';
import { DealUncheckedCreateWithoutTransactionsInputObjectSchema as DealUncheckedCreateWithoutTransactionsInputObjectSchema } from './DealUncheckedCreateWithoutTransactionsInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DealUpdateWithoutTransactionsInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutTransactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => DealCreateWithoutTransactionsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutTransactionsInputObjectSchema)]),
  where: z.lazy(() => DealWhereInputObjectSchema).optional()
}).strict();
export const DealUpsertWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.DealUpsertWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpsertWithoutTransactionsInput>;
export const DealUpsertWithoutTransactionsInputObjectZodSchema = makeSchema();
