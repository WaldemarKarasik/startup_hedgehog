import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeUpdateWithoutInitiatorInputObjectSchema as DisputeUpdateWithoutInitiatorInputObjectSchema } from './DisputeUpdateWithoutInitiatorInput.schema';
import { DisputeUncheckedUpdateWithoutInitiatorInputObjectSchema as DisputeUncheckedUpdateWithoutInitiatorInputObjectSchema } from './DisputeUncheckedUpdateWithoutInitiatorInput.schema';
import { DisputeCreateWithoutInitiatorInputObjectSchema as DisputeCreateWithoutInitiatorInputObjectSchema } from './DisputeCreateWithoutInitiatorInput.schema';
import { DisputeUncheckedCreateWithoutInitiatorInputObjectSchema as DisputeUncheckedCreateWithoutInitiatorInputObjectSchema } from './DisputeUncheckedCreateWithoutInitiatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DisputeUpdateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUncheckedUpdateWithoutInitiatorInputObjectSchema)]),
  create: z.union([z.lazy(() => DisputeCreateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutInitiatorInputObjectSchema)])
}).strict();
export const DisputeUpsertWithWhereUniqueWithoutInitiatorInputObjectSchema: z.ZodType<Prisma.DisputeUpsertWithWhereUniqueWithoutInitiatorInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpsertWithWhereUniqueWithoutInitiatorInput>;
export const DisputeUpsertWithWhereUniqueWithoutInitiatorInputObjectZodSchema = makeSchema();
