import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeScalarWhereInputObjectSchema as DisputeScalarWhereInputObjectSchema } from './DisputeScalarWhereInput.schema';
import { DisputeUpdateManyMutationInputObjectSchema as DisputeUpdateManyMutationInputObjectSchema } from './DisputeUpdateManyMutationInput.schema';
import { DisputeUncheckedUpdateManyWithoutDealInputObjectSchema as DisputeUncheckedUpdateManyWithoutDealInputObjectSchema } from './DisputeUncheckedUpdateManyWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DisputeUpdateManyMutationInputObjectSchema), z.lazy(() => DisputeUncheckedUpdateManyWithoutDealInputObjectSchema)])
}).strict();
export const DisputeUpdateManyWithWhereWithoutDealInputObjectSchema: z.ZodType<Prisma.DisputeUpdateManyWithWhereWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpdateManyWithWhereWithoutDealInput>;
export const DisputeUpdateManyWithWhereWithoutDealInputObjectZodSchema = makeSchema();
