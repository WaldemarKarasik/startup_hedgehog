import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealUpdateWithoutContractInputObjectSchema as DealUpdateWithoutContractInputObjectSchema } from './DealUpdateWithoutContractInput.schema';
import { DealUncheckedUpdateWithoutContractInputObjectSchema as DealUncheckedUpdateWithoutContractInputObjectSchema } from './DealUncheckedUpdateWithoutContractInput.schema';
import { DealCreateWithoutContractInputObjectSchema as DealCreateWithoutContractInputObjectSchema } from './DealCreateWithoutContractInput.schema';
import { DealUncheckedCreateWithoutContractInputObjectSchema as DealUncheckedCreateWithoutContractInputObjectSchema } from './DealUncheckedCreateWithoutContractInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DealUpdateWithoutContractInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutContractInputObjectSchema)]),
  create: z.union([z.lazy(() => DealCreateWithoutContractInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutContractInputObjectSchema)]),
  where: z.lazy(() => DealWhereInputObjectSchema).optional()
}).strict();
export const DealUpsertWithoutContractInputObjectSchema: z.ZodType<Prisma.DealUpsertWithoutContractInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpsertWithoutContractInput>;
export const DealUpsertWithoutContractInputObjectZodSchema = makeSchema();
