import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeCreateWithoutDealInputObjectSchema as DisputeCreateWithoutDealInputObjectSchema } from './DisputeCreateWithoutDealInput.schema';
import { DisputeUncheckedCreateWithoutDealInputObjectSchema as DisputeUncheckedCreateWithoutDealInputObjectSchema } from './DisputeUncheckedCreateWithoutDealInput.schema';
import { DisputeCreateOrConnectWithoutDealInputObjectSchema as DisputeCreateOrConnectWithoutDealInputObjectSchema } from './DisputeCreateOrConnectWithoutDealInput.schema';
import { DisputeCreateManyDealInputEnvelopeObjectSchema as DisputeCreateManyDealInputEnvelopeObjectSchema } from './DisputeCreateManyDealInputEnvelope.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DisputeCreateWithoutDealInputObjectSchema), z.lazy(() => DisputeCreateWithoutDealInputObjectSchema).array(), z.lazy(() => DisputeUncheckedCreateWithoutDealInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutDealInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DisputeCreateOrConnectWithoutDealInputObjectSchema), z.lazy(() => DisputeCreateOrConnectWithoutDealInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DisputeCreateManyDealInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DisputeWhereUniqueInputObjectSchema), z.lazy(() => DisputeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DisputeCreateNestedManyWithoutDealInputObjectSchema: z.ZodType<Prisma.DisputeCreateNestedManyWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateNestedManyWithoutDealInput>;
export const DisputeCreateNestedManyWithoutDealInputObjectZodSchema = makeSchema();
