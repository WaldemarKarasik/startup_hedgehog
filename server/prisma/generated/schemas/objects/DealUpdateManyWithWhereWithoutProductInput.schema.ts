import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealScalarWhereInputObjectSchema as DealScalarWhereInputObjectSchema } from './DealScalarWhereInput.schema';
import { DealUpdateManyMutationInputObjectSchema as DealUpdateManyMutationInputObjectSchema } from './DealUpdateManyMutationInput.schema';
import { DealUncheckedUpdateManyWithoutProductInputObjectSchema as DealUncheckedUpdateManyWithoutProductInputObjectSchema } from './DealUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DealUpdateManyMutationInputObjectSchema), z.lazy(() => DealUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const DealUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateManyWithWhereWithoutProductInput>;
export const DealUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
