import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeCreateWithoutInitiatorInputObjectSchema as DisputeCreateWithoutInitiatorInputObjectSchema } from './DisputeCreateWithoutInitiatorInput.schema';
import { DisputeUncheckedCreateWithoutInitiatorInputObjectSchema as DisputeUncheckedCreateWithoutInitiatorInputObjectSchema } from './DisputeUncheckedCreateWithoutInitiatorInput.schema';
import { DisputeCreateOrConnectWithoutInitiatorInputObjectSchema as DisputeCreateOrConnectWithoutInitiatorInputObjectSchema } from './DisputeCreateOrConnectWithoutInitiatorInput.schema';
import { DisputeCreateManyInitiatorInputEnvelopeObjectSchema as DisputeCreateManyInitiatorInputEnvelopeObjectSchema } from './DisputeCreateManyInitiatorInputEnvelope.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DisputeCreateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeCreateWithoutInitiatorInputObjectSchema).array(), z.lazy(() => DisputeUncheckedCreateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutInitiatorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DisputeCreateOrConnectWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeCreateOrConnectWithoutInitiatorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DisputeCreateManyInitiatorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DisputeCreateNestedManyWithoutInitiatorInputObjectSchema: z.ZodType<Prisma.DisputeCreateNestedManyWithoutInitiatorInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateNestedManyWithoutInitiatorInput>;
export const DisputeCreateNestedManyWithoutInitiatorInputObjectZodSchema = makeSchema();
