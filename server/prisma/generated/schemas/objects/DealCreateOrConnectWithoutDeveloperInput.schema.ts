import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealCreateWithoutDeveloperInputObjectSchema as DealCreateWithoutDeveloperInputObjectSchema } from './DealCreateWithoutDeveloperInput.schema';
import { DealUncheckedCreateWithoutDeveloperInputObjectSchema as DealUncheckedCreateWithoutDeveloperInputObjectSchema } from './DealUncheckedCreateWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DealCreateWithoutDeveloperInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDeveloperInputObjectSchema)])
}).strict();
export const DealCreateOrConnectWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateOrConnectWithoutDeveloperInput>;
export const DealCreateOrConnectWithoutDeveloperInputObjectZodSchema = makeSchema();
