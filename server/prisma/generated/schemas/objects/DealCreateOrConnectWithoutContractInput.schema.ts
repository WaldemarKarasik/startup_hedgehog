import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealCreateWithoutContractInputObjectSchema as DealCreateWithoutContractInputObjectSchema } from './DealCreateWithoutContractInput.schema';
import { DealUncheckedCreateWithoutContractInputObjectSchema as DealUncheckedCreateWithoutContractInputObjectSchema } from './DealUncheckedCreateWithoutContractInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DealCreateWithoutContractInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutContractInputObjectSchema)])
}).strict();
export const DealCreateOrConnectWithoutContractInputObjectSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutContractInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateOrConnectWithoutContractInput>;
export const DealCreateOrConnectWithoutContractInputObjectZodSchema = makeSchema();
