import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateWithoutDeveloperInputObjectSchema as DealUpdateWithoutDeveloperInputObjectSchema } from './DealUpdateWithoutDeveloperInput.schema';
import { DealUncheckedUpdateWithoutDeveloperInputObjectSchema as DealUncheckedUpdateWithoutDeveloperInputObjectSchema } from './DealUncheckedUpdateWithoutDeveloperInput.schema';
import { DealCreateWithoutDeveloperInputObjectSchema as DealCreateWithoutDeveloperInputObjectSchema } from './DealCreateWithoutDeveloperInput.schema';
import { DealUncheckedCreateWithoutDeveloperInputObjectSchema as DealUncheckedCreateWithoutDeveloperInputObjectSchema } from './DealUncheckedCreateWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DealUpdateWithoutDeveloperInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutDeveloperInputObjectSchema)]),
  create: z.union([z.lazy(() => DealCreateWithoutDeveloperInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDeveloperInputObjectSchema)])
}).strict();
export const DealUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpsertWithWhereUniqueWithoutDeveloperInput>;
export const DealUpsertWithWhereUniqueWithoutDeveloperInputObjectZodSchema = makeSchema();
