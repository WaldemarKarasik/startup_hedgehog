import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealCreateWithoutBuyerInputObjectSchema as DealCreateWithoutBuyerInputObjectSchema } from './DealCreateWithoutBuyerInput.schema';
import { DealUncheckedCreateWithoutBuyerInputObjectSchema as DealUncheckedCreateWithoutBuyerInputObjectSchema } from './DealUncheckedCreateWithoutBuyerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DealCreateWithoutBuyerInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutBuyerInputObjectSchema)])
}).strict();
export const DealCreateOrConnectWithoutBuyerInputObjectSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutBuyerInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateOrConnectWithoutBuyerInput>;
export const DealCreateOrConnectWithoutBuyerInputObjectZodSchema = makeSchema();
