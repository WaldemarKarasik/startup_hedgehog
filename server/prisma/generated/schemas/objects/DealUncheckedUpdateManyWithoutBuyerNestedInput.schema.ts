import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutBuyerInputObjectSchema as DealCreateWithoutBuyerInputObjectSchema } from './DealCreateWithoutBuyerInput.schema';
import { DealUncheckedCreateWithoutBuyerInputObjectSchema as DealUncheckedCreateWithoutBuyerInputObjectSchema } from './DealUncheckedCreateWithoutBuyerInput.schema';
import { DealCreateOrConnectWithoutBuyerInputObjectSchema as DealCreateOrConnectWithoutBuyerInputObjectSchema } from './DealCreateOrConnectWithoutBuyerInput.schema';
import { DealUpsertWithWhereUniqueWithoutBuyerInputObjectSchema as DealUpsertWithWhereUniqueWithoutBuyerInputObjectSchema } from './DealUpsertWithWhereUniqueWithoutBuyerInput.schema';
import { DealCreateManyBuyerInputEnvelopeObjectSchema as DealCreateManyBuyerInputEnvelopeObjectSchema } from './DealCreateManyBuyerInputEnvelope.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithWhereUniqueWithoutBuyerInputObjectSchema as DealUpdateWithWhereUniqueWithoutBuyerInputObjectSchema } from './DealUpdateWithWhereUniqueWithoutBuyerInput.schema';
import { DealUpdateManyWithWhereWithoutBuyerInputObjectSchema as DealUpdateManyWithWhereWithoutBuyerInputObjectSchema } from './DealUpdateManyWithWhereWithoutBuyerInput.schema';
import { DealScalarWhereInputObjectSchema as DealScalarWhereInputObjectSchema } from './DealScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutBuyerInputObjectSchema), z.lazy(() => DealCreateWithoutBuyerInputObjectSchema).array(), z.lazy(() => DealUncheckedCreateWithoutBuyerInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutBuyerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DealCreateOrConnectWithoutBuyerInputObjectSchema), z.lazy(() => DealCreateOrConnectWithoutBuyerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DealUpsertWithWhereUniqueWithoutBuyerInputObjectSchema), z.lazy(() => DealUpsertWithWhereUniqueWithoutBuyerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DealCreateManyBuyerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DealUpdateWithWhereUniqueWithoutBuyerInputObjectSchema), z.lazy(() => DealUpdateWithWhereUniqueWithoutBuyerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DealUpdateManyWithWhereWithoutBuyerInputObjectSchema), z.lazy(() => DealUpdateManyWithWhereWithoutBuyerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DealScalarWhereInputObjectSchema), z.lazy(() => DealScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DealUncheckedUpdateManyWithoutBuyerNestedInputObjectSchema: z.ZodType<Prisma.DealUncheckedUpdateManyWithoutBuyerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUncheckedUpdateManyWithoutBuyerNestedInput>;
export const DealUncheckedUpdateManyWithoutBuyerNestedInputObjectZodSchema = makeSchema();
