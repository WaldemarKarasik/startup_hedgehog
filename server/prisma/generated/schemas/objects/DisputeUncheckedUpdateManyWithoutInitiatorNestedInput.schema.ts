import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeCreateWithoutInitiatorInputObjectSchema as DisputeCreateWithoutInitiatorInputObjectSchema } from './DisputeCreateWithoutInitiatorInput.schema';
import { DisputeUncheckedCreateWithoutInitiatorInputObjectSchema as DisputeUncheckedCreateWithoutInitiatorInputObjectSchema } from './DisputeUncheckedCreateWithoutInitiatorInput.schema';
import { DisputeCreateOrConnectWithoutInitiatorInputObjectSchema as DisputeCreateOrConnectWithoutInitiatorInputObjectSchema } from './DisputeCreateOrConnectWithoutInitiatorInput.schema';
import { DisputeUpsertWithWhereUniqueWithoutInitiatorInputObjectSchema as DisputeUpsertWithWhereUniqueWithoutInitiatorInputObjectSchema } from './DisputeUpsertWithWhereUniqueWithoutInitiatorInput.schema';
import { DisputeCreateManyInitiatorInputEnvelopeObjectSchema as DisputeCreateManyInitiatorInputEnvelopeObjectSchema } from './DisputeCreateManyInitiatorInputEnvelope.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeUpdateWithWhereUniqueWithoutInitiatorInputObjectSchema as DisputeUpdateWithWhereUniqueWithoutInitiatorInputObjectSchema } from './DisputeUpdateWithWhereUniqueWithoutInitiatorInput.schema';
import { DisputeUpdateManyWithWhereWithoutInitiatorInputObjectSchema as DisputeUpdateManyWithWhereWithoutInitiatorInputObjectSchema } from './DisputeUpdateManyWithWhereWithoutInitiatorInput.schema';
import { DisputeScalarWhereInputObjectSchema as DisputeScalarWhereInputObjectSchema } from './DisputeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DisputeCreateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeCreateWithoutInitiatorInputObjectSchema).array(), z.lazy(() => DisputeUncheckedCreateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutInitiatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DisputeCreateOrConnectWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeCreateOrConnectWithoutInitiatorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DisputeUpsertWithWhereUniqueWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUpsertWithWhereUniqueWithoutInitiatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DisputeCreateManyInitiatorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DisputeUpdateWithWhereUniqueWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUpdateWithWhereUniqueWithoutInitiatorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DisputeUpdateManyWithWhereWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUpdateManyWithWhereWithoutInitiatorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DisputeScalarWhereInputObjectSchema), z.lazy(() => DisputeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DisputeUncheckedUpdateManyWithoutInitiatorNestedInputObjectSchema: z.ZodType<Prisma.DisputeUncheckedUpdateManyWithoutInitiatorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUncheckedUpdateManyWithoutInitiatorNestedInput>;
export const DisputeUncheckedUpdateManyWithoutInitiatorNestedInputObjectZodSchema = makeSchema();
