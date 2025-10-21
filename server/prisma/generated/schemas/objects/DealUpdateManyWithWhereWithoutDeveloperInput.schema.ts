import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealScalarWhereInputObjectSchema as DealScalarWhereInputObjectSchema } from './DealScalarWhereInput.schema';
import { DealUpdateManyMutationInputObjectSchema as DealUpdateManyMutationInputObjectSchema } from './DealUpdateManyMutationInput.schema';
import { DealUncheckedUpdateManyWithoutDeveloperInputObjectSchema as DealUncheckedUpdateManyWithoutDeveloperInputObjectSchema } from './DealUncheckedUpdateManyWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DealUpdateManyMutationInputObjectSchema), z.lazy(() => DealUncheckedUpdateManyWithoutDeveloperInputObjectSchema)])
}).strict();
export const DealUpdateManyWithWhereWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateManyWithWhereWithoutDeveloperInput>;
export const DealUpdateManyWithWhereWithoutDeveloperInputObjectZodSchema = makeSchema();
