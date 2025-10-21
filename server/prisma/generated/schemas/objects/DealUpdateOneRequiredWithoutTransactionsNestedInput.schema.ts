import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutTransactionsInputObjectSchema as DealCreateWithoutTransactionsInputObjectSchema } from './DealCreateWithoutTransactionsInput.schema';
import { DealUncheckedCreateWithoutTransactionsInputObjectSchema as DealUncheckedCreateWithoutTransactionsInputObjectSchema } from './DealUncheckedCreateWithoutTransactionsInput.schema';
import { DealCreateOrConnectWithoutTransactionsInputObjectSchema as DealCreateOrConnectWithoutTransactionsInputObjectSchema } from './DealCreateOrConnectWithoutTransactionsInput.schema';
import { DealUpsertWithoutTransactionsInputObjectSchema as DealUpsertWithoutTransactionsInputObjectSchema } from './DealUpsertWithoutTransactionsInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateToOneWithWhereWithoutTransactionsInputObjectSchema as DealUpdateToOneWithWhereWithoutTransactionsInputObjectSchema } from './DealUpdateToOneWithWhereWithoutTransactionsInput.schema';
import { DealUpdateWithoutTransactionsInputObjectSchema as DealUpdateWithoutTransactionsInputObjectSchema } from './DealUpdateWithoutTransactionsInput.schema';
import { DealUncheckedUpdateWithoutTransactionsInputObjectSchema as DealUncheckedUpdateWithoutTransactionsInputObjectSchema } from './DealUncheckedUpdateWithoutTransactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutTransactionsInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutTransactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutTransactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => DealUpsertWithoutTransactionsInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DealUpdateToOneWithWhereWithoutTransactionsInputObjectSchema), z.lazy(() => DealUpdateWithoutTransactionsInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutTransactionsInputObjectSchema)]).optional()
}).strict();
export const DealUpdateOneRequiredWithoutTransactionsNestedInputObjectSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutTransactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateOneRequiredWithoutTransactionsNestedInput>;
export const DealUpdateOneRequiredWithoutTransactionsNestedInputObjectZodSchema = makeSchema();
