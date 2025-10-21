import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeUpdateWithoutDealInputObjectSchema as DisputeUpdateWithoutDealInputObjectSchema } from './DisputeUpdateWithoutDealInput.schema';
import { DisputeUncheckedUpdateWithoutDealInputObjectSchema as DisputeUncheckedUpdateWithoutDealInputObjectSchema } from './DisputeUncheckedUpdateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DisputeUpdateWithoutDealInputObjectSchema), z.lazy(() => DisputeUncheckedUpdateWithoutDealInputObjectSchema)])
}).strict();
export const DisputeUpdateWithWhereUniqueWithoutDealInputObjectSchema: z.ZodType<Prisma.DisputeUpdateWithWhereUniqueWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpdateWithWhereUniqueWithoutDealInput>;
export const DisputeUpdateWithWhereUniqueWithoutDealInputObjectZodSchema = makeSchema();
