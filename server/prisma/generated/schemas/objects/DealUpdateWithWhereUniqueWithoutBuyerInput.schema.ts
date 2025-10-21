import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithoutBuyerInputObjectSchema as DealUpdateWithoutBuyerInputObjectSchema } from './DealUpdateWithoutBuyerInput.schema';
import { DealUncheckedUpdateWithoutBuyerInputObjectSchema as DealUncheckedUpdateWithoutBuyerInputObjectSchema } from './DealUncheckedUpdateWithoutBuyerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DealUpdateWithoutBuyerInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutBuyerInputObjectSchema)])
}).strict();
export const DealUpdateWithWhereUniqueWithoutBuyerInputObjectSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutBuyerInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutBuyerInput>;
export const DealUpdateWithWhereUniqueWithoutBuyerInputObjectZodSchema = makeSchema();
