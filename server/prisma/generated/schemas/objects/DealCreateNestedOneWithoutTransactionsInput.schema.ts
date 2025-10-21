import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutTransactionsInputObjectSchema as DealCreateWithoutTransactionsInputObjectSchema } from './DealCreateWithoutTransactionsInput.schema';
import { DealUncheckedCreateWithoutTransactionsInputObjectSchema as DealUncheckedCreateWithoutTransactionsInputObjectSchema } from './DealUncheckedCreateWithoutTransactionsInput.schema';
import { DealCreateOrConnectWithoutTransactionsInputObjectSchema as DealCreateOrConnectWithoutTransactionsInputObjectSchema } from './DealCreateOrConnectWithoutTransactionsInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutTransactionsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutTransactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutTransactionsInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional()
}).strict();
export const DealCreateNestedOneWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateNestedOneWithoutTransactionsInput>;
export const DealCreateNestedOneWithoutTransactionsInputObjectZodSchema = makeSchema();
