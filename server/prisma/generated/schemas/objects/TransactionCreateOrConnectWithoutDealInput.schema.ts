import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionWhereUniqueInputObjectSchema as TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionCreateWithoutDealInputObjectSchema as TransactionCreateWithoutDealInputObjectSchema } from './TransactionCreateWithoutDealInput.schema';
import { TransactionUncheckedCreateWithoutDealInputObjectSchema as TransactionUncheckedCreateWithoutDealInputObjectSchema } from './TransactionUncheckedCreateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TransactionCreateWithoutDealInputObjectSchema), z.lazy(() => TransactionUncheckedCreateWithoutDealInputObjectSchema)])
}).strict();
export const TransactionCreateOrConnectWithoutDealInputObjectSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionCreateOrConnectWithoutDealInput>;
export const TransactionCreateOrConnectWithoutDealInputObjectZodSchema = makeSchema();
