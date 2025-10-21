import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeUpdateWithoutDealInputObjectSchema as DisputeUpdateWithoutDealInputObjectSchema } from './DisputeUpdateWithoutDealInput.schema';
import { DisputeUncheckedUpdateWithoutDealInputObjectSchema as DisputeUncheckedUpdateWithoutDealInputObjectSchema } from './DisputeUncheckedUpdateWithoutDealInput.schema';
import { DisputeCreateWithoutDealInputObjectSchema as DisputeCreateWithoutDealInputObjectSchema } from './DisputeCreateWithoutDealInput.schema';
import { DisputeUncheckedCreateWithoutDealInputObjectSchema as DisputeUncheckedCreateWithoutDealInputObjectSchema } from './DisputeUncheckedCreateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DisputeUpdateWithoutDealInputObjectSchema), z.lazy(() => DisputeUncheckedUpdateWithoutDealInputObjectSchema)]),
  create: z.union([z.lazy(() => DisputeCreateWithoutDealInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutDealInputObjectSchema)])
}).strict();
export const DisputeUpsertWithWhereUniqueWithoutDealInputObjectSchema: z.ZodType<Prisma.DisputeUpsertWithWhereUniqueWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpsertWithWhereUniqueWithoutDealInput>;
export const DisputeUpsertWithWhereUniqueWithoutDealInputObjectZodSchema = makeSchema();
