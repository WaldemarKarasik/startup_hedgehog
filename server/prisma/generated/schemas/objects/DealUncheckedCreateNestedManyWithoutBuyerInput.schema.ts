import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutBuyerInputObjectSchema as DealCreateWithoutBuyerInputObjectSchema } from './DealCreateWithoutBuyerInput.schema';
import { DealUncheckedCreateWithoutBuyerInputObjectSchema as DealUncheckedCreateWithoutBuyerInputObjectSchema } from './DealUncheckedCreateWithoutBuyerInput.schema';
import { DealCreateOrConnectWithoutBuyerInputObjectSchema as DealCreateOrConnectWithoutBuyerInputObjectSchema } from './DealCreateOrConnectWithoutBuyerInput.schema';
import { DealCreateManyBuyerInputEnvelopeObjectSchema as DealCreateManyBuyerInputEnvelopeObjectSchema } from './DealCreateManyBuyerInputEnvelope.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutBuyerInputObjectSchema), z.lazy(() => DealCreateWithoutBuyerInputObjectSchema).array(), z.lazy(() => DealUncheckedCreateWithoutBuyerInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutBuyerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DealCreateOrConnectWithoutBuyerInputObjectSchema), z.lazy(() => DealCreateOrConnectWithoutBuyerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DealCreateManyBuyerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DealWhereUniqueInputObjectSchema), z.lazy(() => DealWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DealUncheckedCreateNestedManyWithoutBuyerInputObjectSchema: z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutBuyerInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutBuyerInput>;
export const DealUncheckedCreateNestedManyWithoutBuyerInputObjectZodSchema = makeSchema();
