import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionWhereUniqueInputObjectSchema as TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutDealInputObjectSchema as TransactionUpdateWithoutDealInputObjectSchema } from './TransactionUpdateWithoutDealInput.schema';
import { TransactionUncheckedUpdateWithoutDealInputObjectSchema as TransactionUncheckedUpdateWithoutDealInputObjectSchema } from './TransactionUncheckedUpdateWithoutDealInput.schema';
import { TransactionCreateWithoutDealInputObjectSchema as TransactionCreateWithoutDealInputObjectSchema } from './TransactionCreateWithoutDealInput.schema';
import { TransactionUncheckedCreateWithoutDealInputObjectSchema as TransactionUncheckedCreateWithoutDealInputObjectSchema } from './TransactionUncheckedCreateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TransactionUpdateWithoutDealInputObjectSchema), z.lazy(() => TransactionUncheckedUpdateWithoutDealInputObjectSchema)]),
  create: z.union([z.lazy(() => TransactionCreateWithoutDealInputObjectSchema), z.lazy(() => TransactionUncheckedCreateWithoutDealInputObjectSchema)])
}).strict();
export const TransactionUpsertWithWhereUniqueWithoutDealInputObjectSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutDealInput>;
export const TransactionUpsertWithWhereUniqueWithoutDealInputObjectZodSchema = makeSchema();
