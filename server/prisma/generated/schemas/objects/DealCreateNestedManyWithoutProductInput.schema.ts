import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutProductInputObjectSchema as DealCreateWithoutProductInputObjectSchema } from './DealCreateWithoutProductInput.schema';
import { DealUncheckedCreateWithoutProductInputObjectSchema as DealUncheckedCreateWithoutProductInputObjectSchema } from './DealUncheckedCreateWithoutProductInput.schema';
import { DealCreateOrConnectWithoutProductInputObjectSchema as DealCreateOrConnectWithoutProductInputObjectSchema } from './DealCreateOrConnectWithoutProductInput.schema';
import { DealCreateManyProductInputEnvelopeObjectSchema as DealCreateManyProductInputEnvelopeObjectSchema } from './DealCreateManyProductInputEnvelope.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutProductInputObjectSchema), z.lazy(() => DealCreateWithoutProductInputObjectSchema).array(), z.lazy(() => DealUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DealCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => DealCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DealCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DealCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<Prisma.DealCreateNestedManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateNestedManyWithoutProductInput>;
export const DealCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
