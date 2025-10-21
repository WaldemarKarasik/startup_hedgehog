import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutDeveloperInputObjectSchema as DealCreateWithoutDeveloperInputObjectSchema } from './DealCreateWithoutDeveloperInput.schema';
import { DealUncheckedCreateWithoutDeveloperInputObjectSchema as DealUncheckedCreateWithoutDeveloperInputObjectSchema } from './DealUncheckedCreateWithoutDeveloperInput.schema';
import { DealCreateOrConnectWithoutDeveloperInputObjectSchema as DealCreateOrConnectWithoutDeveloperInputObjectSchema } from './DealCreateOrConnectWithoutDeveloperInput.schema';
import { DealUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema as DealUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema } from './DealUpsertWithWhereUniqueWithoutDeveloperInput.schema';
import { DealCreateManyDeveloperInputEnvelopeObjectSchema as DealCreateManyDeveloperInputEnvelopeObjectSchema } from './DealCreateManyDeveloperInputEnvelope.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema as DealUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema } from './DealUpdateWithWhereUniqueWithoutDeveloperInput.schema';
import { DealUpdateManyWithWhereWithoutDeveloperInputObjectSchema as DealUpdateManyWithWhereWithoutDeveloperInputObjectSchema } from './DealUpdateManyWithWhereWithoutDeveloperInput.schema';
import { DealScalarWhereInputObjectSchema as DealScalarWhereInputObjectSchema } from './DealScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutDeveloperInputObjectSchema), z.lazy(() => DealCreateWithoutDeveloperInputObjectSchema).array(), z.lazy(() => DealUncheckedCreateWithoutDeveloperInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDeveloperInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DealCreateOrConnectWithoutDeveloperInputObjectSchema), z.lazy(() => DealCreateOrConnectWithoutDeveloperInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DealUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema), z.lazy(() => DealUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DealCreateManyDeveloperInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DealUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema), z.lazy(() => DealUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DealUpdateManyWithWhereWithoutDeveloperInputObjectSchema), z.lazy(() => DealUpdateManyWithWhereWithoutDeveloperInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DealScalarWhereInputObjectSchema), z.lazy(() => DealScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DealUpdateManyWithoutDeveloperNestedInputObjectSchema: z.ZodType<Prisma.DealUpdateManyWithoutDeveloperNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateManyWithoutDeveloperNestedInput>;
export const DealUpdateManyWithoutDeveloperNestedInputObjectZodSchema = makeSchema();
