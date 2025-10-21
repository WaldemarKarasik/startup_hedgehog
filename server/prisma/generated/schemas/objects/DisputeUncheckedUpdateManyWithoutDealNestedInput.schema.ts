import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeCreateWithoutDealInputObjectSchema as DisputeCreateWithoutDealInputObjectSchema } from './DisputeCreateWithoutDealInput.schema';
import { DisputeUncheckedCreateWithoutDealInputObjectSchema as DisputeUncheckedCreateWithoutDealInputObjectSchema } from './DisputeUncheckedCreateWithoutDealInput.schema';
import { DisputeCreateOrConnectWithoutDealInputObjectSchema as DisputeCreateOrConnectWithoutDealInputObjectSchema } from './DisputeCreateOrConnectWithoutDealInput.schema';
import { DisputeUpsertWithWhereUniqueWithoutDealInputObjectSchema as DisputeUpsertWithWhereUniqueWithoutDealInputObjectSchema } from './DisputeUpsertWithWhereUniqueWithoutDealInput.schema';
import { DisputeCreateManyDealInputEnvelopeObjectSchema as DisputeCreateManyDealInputEnvelopeObjectSchema } from './DisputeCreateManyDealInputEnvelope.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeUpdateWithWhereUniqueWithoutDealInputObjectSchema as DisputeUpdateWithWhereUniqueWithoutDealInputObjectSchema } from './DisputeUpdateWithWhereUniqueWithoutDealInput.schema';
import { DisputeUpdateManyWithWhereWithoutDealInputObjectSchema as DisputeUpdateManyWithWhereWithoutDealInputObjectSchema } from './DisputeUpdateManyWithWhereWithoutDealInput.schema';
import { DisputeScalarWhereInputObjectSchema as DisputeScalarWhereInputObjectSchema } from './DisputeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DisputeCreateWithoutDealInputObjectSchema), z.lazy(() => DisputeCreateWithoutDealInputObjectSchema).array(), z.lazy(() => DisputeUncheckedCreateWithoutDealInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutDealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DisputeCreateOrConnectWithoutDealInputObjectSchema), z.lazy(() => DisputeCreateOrConnectWithoutDealInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DisputeUpsertWithWhereUniqueWithoutDealInputObjectSchema), z.lazy(() => DisputeUpsertWithWhereUniqueWithoutDealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DisputeCreateManyDealInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DisputeUpdateWithWhereUniqueWithoutDealInputObjectSchema), z.lazy(() => DisputeUpdateWithWhereUniqueWithoutDealInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DisputeUpdateManyWithWhereWithoutDealInputObjectSchema), z.lazy(() => DisputeUpdateManyWithWhereWithoutDealInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DisputeScalarWhereInputObjectSchema), z.lazy(() => DisputeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DisputeUncheckedUpdateManyWithoutDealNestedInputObjectSchema: z.ZodType<Prisma.DisputeUncheckedUpdateManyWithoutDealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUncheckedUpdateManyWithoutDealNestedInput>;
export const DisputeUncheckedUpdateManyWithoutDealNestedInputObjectZodSchema = makeSchema();
