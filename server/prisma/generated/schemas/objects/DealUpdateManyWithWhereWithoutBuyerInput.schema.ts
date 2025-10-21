import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealScalarWhereInputObjectSchema as DealScalarWhereInputObjectSchema } from './DealScalarWhereInput.schema';
import { DealUpdateManyMutationInputObjectSchema as DealUpdateManyMutationInputObjectSchema } from './DealUpdateManyMutationInput.schema';
import { DealUncheckedUpdateManyWithoutBuyerInputObjectSchema as DealUncheckedUpdateManyWithoutBuyerInputObjectSchema } from './DealUncheckedUpdateManyWithoutBuyerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DealUpdateManyMutationInputObjectSchema), z.lazy(() => DealUncheckedUpdateManyWithoutBuyerInputObjectSchema)])
}).strict();
export const DealUpdateManyWithWhereWithoutBuyerInputObjectSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutBuyerInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateManyWithWhereWithoutBuyerInput>;
export const DealUpdateManyWithWhereWithoutBuyerInputObjectZodSchema = makeSchema();
