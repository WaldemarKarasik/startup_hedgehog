import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionCreateWithoutDealInputObjectSchema as TransactionCreateWithoutDealInputObjectSchema } from './TransactionCreateWithoutDealInput.schema';
import { TransactionUncheckedCreateWithoutDealInputObjectSchema as TransactionUncheckedCreateWithoutDealInputObjectSchema } from './TransactionUncheckedCreateWithoutDealInput.schema';
import { TransactionCreateOrConnectWithoutDealInputObjectSchema as TransactionCreateOrConnectWithoutDealInputObjectSchema } from './TransactionCreateOrConnectWithoutDealInput.schema';
import { TransactionUpsertWithWhereUniqueWithoutDealInputObjectSchema as TransactionUpsertWithWhereUniqueWithoutDealInputObjectSchema } from './TransactionUpsertWithWhereUniqueWithoutDealInput.schema';
import { TransactionCreateManyDealInputEnvelopeObjectSchema as TransactionCreateManyDealInputEnvelopeObjectSchema } from './TransactionCreateManyDealInputEnvelope.schema';
import { TransactionWhereUniqueInputObjectSchema as TransactionWhereUniqueInputObjectSchema } from './TransactionWhereUniqueInput.schema';
import { TransactionUpdateWithWhereUniqueWithoutDealInputObjectSchema as TransactionUpdateWithWhereUniqueWithoutDealInputObjectSchema } from './TransactionUpdateWithWhereUniqueWithoutDealInput.schema';
import { TransactionUpdateManyWithWhereWithoutDealInputObjectSchema as TransactionUpdateManyWithWhereWithoutDealInputObjectSchema } from './TransactionUpdateManyWithWhereWithoutDealInput.schema';
import { TransactionScalarWhereInputObjectSchema as TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TransactionCreateWithoutDealInputObjectSchema), z.lazy(() => TransactionCreateWithoutDealInputObjectSchema).array(), z.lazy(() => TransactionUncheckedCreateWithoutDealInputObjectSchema), z.lazy(() => TransactionUncheckedCreateWithoutDealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TransactionCreateOrConnectWithoutDealInputObjectSchema), z.lazy(() => TransactionCreateOrConnectWithoutDealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TransactionUpsertWithWhereUniqueWithoutDealInputObjectSchema), z.lazy(() => TransactionUpsertWithWhereUniqueWithoutDealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TransactionCreateManyDealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TransactionWhereUniqueInputObjectSchema), z.lazy(() => TransactionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TransactionWhereUniqueInputObjectSchema), z.lazy(() => TransactionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TransactionWhereUniqueInputObjectSchema), z.lazy(() => TransactionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TransactionWhereUniqueInputObjectSchema), z.lazy(() => TransactionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TransactionUpdateWithWhereUniqueWithoutDealInputObjectSchema), z.lazy(() => TransactionUpdateWithWhereUniqueWithoutDealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TransactionUpdateManyWithWhereWithoutDealInputObjectSchema), z.lazy(() => TransactionUpdateManyWithWhereWithoutDealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TransactionScalarWhereInputObjectSchema), z.lazy(() => TransactionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TransactionUpdateManyWithoutDealNestedInputObjectSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutDealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUpdateManyWithoutDealNestedInput>;
export const TransactionUpdateManyWithoutDealNestedInputObjectZodSchema = makeSchema();
