import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema';
import { DealUpdateWithoutRevenueReportsInputObjectSchema as DealUpdateWithoutRevenueReportsInputObjectSchema } from './DealUpdateWithoutRevenueReportsInput.schema';
import { DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema as DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema } from './DealUncheckedUpdateWithoutRevenueReportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DealUpdateWithoutRevenueReportsInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutRevenueReportsInputObjectSchema)])
}).strict();
export const DealUpdateToOneWithWhereWithoutRevenueReportsInputObjectSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutRevenueReportsInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutRevenueReportsInput>;
export const DealUpdateToOneWithWhereWithoutRevenueReportsInputObjectZodSchema = makeSchema();
