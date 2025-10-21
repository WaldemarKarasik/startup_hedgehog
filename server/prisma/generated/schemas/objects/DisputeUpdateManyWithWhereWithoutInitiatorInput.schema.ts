import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeScalarWhereInputObjectSchema as DisputeScalarWhereInputObjectSchema } from './DisputeScalarWhereInput.schema';
import { DisputeUpdateManyMutationInputObjectSchema as DisputeUpdateManyMutationInputObjectSchema } from './DisputeUpdateManyMutationInput.schema';
import { DisputeUncheckedUpdateManyWithoutInitiatorInputObjectSchema as DisputeUncheckedUpdateManyWithoutInitiatorInputObjectSchema } from './DisputeUncheckedUpdateManyWithoutInitiatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DisputeUpdateManyMutationInputObjectSchema), z.lazy(() => DisputeUncheckedUpdateManyWithoutInitiatorInputObjectSchema)])
}).strict();
export const DisputeUpdateManyWithWhereWithoutInitiatorInputObjectSchema: z.ZodType<Prisma.DisputeUpdateManyWithWhereWithoutInitiatorInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpdateManyWithWhereWithoutInitiatorInput>;
export const DisputeUpdateManyWithWhereWithoutInitiatorInputObjectZodSchema = makeSchema();
