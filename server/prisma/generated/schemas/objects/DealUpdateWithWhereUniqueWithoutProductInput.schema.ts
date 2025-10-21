import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithoutProductInputObjectSchema as DealUpdateWithoutProductInputObjectSchema } from './DealUpdateWithoutProductInput.schema';
import { DealUncheckedUpdateWithoutProductInputObjectSchema as DealUncheckedUpdateWithoutProductInputObjectSchema } from './DealUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DealUpdateWithoutProductInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const DealUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutProductInput>;
export const DealUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
