import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutProductInputObjectSchema as DealCreateWithoutProductInputObjectSchema } from './DealCreateWithoutProductInput.schema';
import { DealUncheckedCreateWithoutProductInputObjectSchema as DealUncheckedCreateWithoutProductInputObjectSchema } from './DealUncheckedCreateWithoutProductInput.schema';
import { DealCreateOrConnectWithoutProductInputObjectSchema as DealCreateOrConnectWithoutProductInputObjectSchema } from './DealCreateOrConnectWithoutProductInput.schema';
import { DealUpsertWithWhereUniqueWithoutProductInputObjectSchema as DealUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './DealUpsertWithWhereUniqueWithoutProductInput.schema';
import { DealCreateManyProductInputEnvelopeObjectSchema as DealCreateManyProductInputEnvelopeObjectSchema } from './DealCreateManyProductInputEnvelope.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithWhereUniqueWithoutProductInputObjectSchema as DealUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './DealUpdateWithWhereUniqueWithoutProductInput.schema';
import { DealUpdateManyWithWhereWithoutProductInputObjectSchema as DealUpdateManyWithWhereWithoutProductInputObjectSchema } from './DealUpdateManyWithWhereWithoutProductInput.schema';
import { DealScalarWhereInputObjectSchema as DealScalarWhereInputObjectSchema } from './DealScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutProductInputObjectSchema), z.lazy(() => DealCreateWithoutProductInputObjectSchema).array(), z.lazy(() => DealUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DealCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => DealCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DealUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => DealUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DealCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DealUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => DealUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DealUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => DealUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DealScalarWhereInputObjectSchema), z.lazy(() => DealScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DealUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.DealUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateManyWithoutProductNestedInput>;
export const DealUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
