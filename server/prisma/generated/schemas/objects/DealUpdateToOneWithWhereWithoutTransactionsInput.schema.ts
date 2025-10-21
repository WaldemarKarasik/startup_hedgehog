import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema';
import { DealUpdateWithoutTransactionsInputObjectSchema as DealUpdateWithoutTransactionsInputObjectSchema } from './DealUpdateWithoutTransactionsInput.schema';
import { DealUncheckedUpdateWithoutTransactionsInputObjectSchema as DealUncheckedUpdateWithoutTransactionsInputObjectSchema } from './DealUncheckedUpdateWithoutTransactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DealUpdateWithoutTransactionsInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutTransactionsInputObjectSchema)])
}).strict();
export const DealUpdateToOneWithWhereWithoutTransactionsInputObjectSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutTransactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutTransactionsInput>;
export const DealUpdateToOneWithWhereWithoutTransactionsInputObjectZodSchema = makeSchema();
