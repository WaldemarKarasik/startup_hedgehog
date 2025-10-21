import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionWhereUniqueInputObjectSchema as TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithoutDealInputObjectSchema as TransactionUpdateWithoutDealInputObjectSchema } from './TransactionUpdateWithoutDealInput.schema';
import { TransactionUncheckedUpdateWithoutDealInputObjectSchema as TransactionUncheckedUpdateWithoutDealInputObjectSchema } from './TransactionUncheckedUpdateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TransactionUpdateWithoutDealInputObjectSchema), z.lazy(() => TransactionUncheckedUpdateWithoutDealInputObjectSchema)])
}).strict();
export const TransactionUpdateWithWhereUniqueWithoutDealInputObjectSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutDealInput>;
export const TransactionUpdateWithWhereUniqueWithoutDealInputObjectZodSchema = makeSchema();
