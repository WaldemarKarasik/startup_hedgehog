import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutDeveloperInputObjectSchema as DealCreateWithoutDeveloperInputObjectSchema } from './DealCreateWithoutDeveloperInput.schema';
import { DealUncheckedCreateWithoutDeveloperInputObjectSchema as DealUncheckedCreateWithoutDeveloperInputObjectSchema } from './DealUncheckedCreateWithoutDeveloperInput.schema';
import { DealCreateOrConnectWithoutDeveloperInputObjectSchema as DealCreateOrConnectWithoutDeveloperInputObjectSchema } from './DealCreateOrConnectWithoutDeveloperInput.schema';
import { DealCreateManyDeveloperInputEnvelopeObjectSchema as DealCreateManyDeveloperInputEnvelopeObjectSchema } from './DealCreateManyDeveloperInputEnvelope.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutDeveloperInputObjectSchema), z.lazy(() => DealCreateWithoutDeveloperInputObjectSchema).array(), z.lazy(() => DealUncheckedCreateWithoutDeveloperInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDeveloperInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DealCreateOrConnectWithoutDeveloperInputObjectSchema), z.lazy(() => DealCreateOrConnectWithoutDeveloperInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DealCreateManyDeveloperInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DealUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutDeveloperInput>;
export const DealUncheckedCreateNestedManyWithoutDeveloperInputObjectZodSchema = makeSchema();
