import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutContractInputObjectSchema as DealCreateWithoutContractInputObjectSchema } from './DealCreateWithoutContractInput.schema';
import { DealUncheckedCreateWithoutContractInputObjectSchema as DealUncheckedCreateWithoutContractInputObjectSchema } from './DealUncheckedCreateWithoutContractInput.schema';
import { DealCreateOrConnectWithoutContractInputObjectSchema as DealCreateOrConnectWithoutContractInputObjectSchema } from './DealCreateOrConnectWithoutContractInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutContractInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutContractInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutContractInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional()
}).strict();
export const DealCreateNestedOneWithoutContractInputObjectSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutContractInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateNestedOneWithoutContractInput>;
export const DealCreateNestedOneWithoutContractInputObjectZodSchema = makeSchema();
