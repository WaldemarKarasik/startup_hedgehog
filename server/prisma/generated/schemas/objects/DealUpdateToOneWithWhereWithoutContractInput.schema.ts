import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema';
import { DealUpdateWithoutContractInputObjectSchema as DealUpdateWithoutContractInputObjectSchema } from './DealUpdateWithoutContractInput.schema';
import { DealUncheckedUpdateWithoutContractInputObjectSchema as DealUncheckedUpdateWithoutContractInputObjectSchema } from './DealUncheckedUpdateWithoutContractInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DealUpdateWithoutContractInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutContractInputObjectSchema)])
}).strict();
export const DealUpdateToOneWithWhereWithoutContractInputObjectSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutContractInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutContractInput>;
export const DealUpdateToOneWithWhereWithoutContractInputObjectZodSchema = makeSchema();
