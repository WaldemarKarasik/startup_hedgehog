import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeUpdateWithoutInitiatorInputObjectSchema as DisputeUpdateWithoutInitiatorInputObjectSchema } from './DisputeUpdateWithoutInitiatorInput.schema';
import { DisputeUncheckedUpdateWithoutInitiatorInputObjectSchema as DisputeUncheckedUpdateWithoutInitiatorInputObjectSchema } from './DisputeUncheckedUpdateWithoutInitiatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DisputeUpdateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUncheckedUpdateWithoutInitiatorInputObjectSchema)])
}).strict();
export const DisputeUpdateWithWhereUniqueWithoutInitiatorInputObjectSchema: z.ZodType<Prisma.DisputeUpdateWithWhereUniqueWithoutInitiatorInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpdateWithWhereUniqueWithoutInitiatorInput>;
export const DisputeUpdateWithWhereUniqueWithoutInitiatorInputObjectZodSchema = makeSchema();
