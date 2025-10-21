import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithoutDeveloperInputObjectSchema as DealUpdateWithoutDeveloperInputObjectSchema } from './DealUpdateWithoutDeveloperInput.schema';
import { DealUncheckedUpdateWithoutDeveloperInputObjectSchema as DealUncheckedUpdateWithoutDeveloperInputObjectSchema } from './DealUncheckedUpdateWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DealUpdateWithoutDeveloperInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutDeveloperInputObjectSchema)])
}).strict();
export const DealUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutDeveloperInput>;
export const DealUpdateWithWhereUniqueWithoutDeveloperInputObjectZodSchema = makeSchema();
