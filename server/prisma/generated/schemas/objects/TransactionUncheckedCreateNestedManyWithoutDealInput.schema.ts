import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionCreateWithoutDealInputObjectSchema as TransactionCreateWithoutDealInputObjectSchema } from './TransactionCreateWithoutDealInput.schema';
import { TransactionUncheckedCreateWithoutDealInputObjectSchema as TransactionUncheckedCreateWithoutDealInputObjectSchema } from './TransactionUncheckedCreateWithoutDealInput.schema';
import { TransactionCreateOrConnectWithoutDealInputObjectSchema as TransactionCreateOrConnectWithoutDealInputObjectSchema } from './TransactionCreateOrConnectWithoutDealInput.schema';
import { TransactionCreateManyDealInputEnvelopeObjectSchema as TransactionCreateManyDealInputEnvelopeObjectSchema } from './TransactionCreateManyDealInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema as TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TransactionCreateWithoutDealInputObjectSchema), z.lazy(() => TransactionCreateWithoutDealInputObjectSchema).array(), z.lazy(() => TransactionUncheckedCreateWithoutDealInputObjectSchema), z.lazy(() => TransactionUncheckedCreateWithoutDealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TransactionCreateOrConnectWithoutDealInputObjectSchema), z.lazy(() => TransactionCreateOrConnectWithoutDealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TransactionCreateManyDealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TransactionWhereUniqueInputObjectSchema), z.lazy(() => TransactionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TransactionUncheckedCreateNestedManyWithoutDealInputObjectSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutDealInput>;
export const TransactionUncheckedCreateNestedManyWithoutDealInputObjectZodSchema = makeSchema();
