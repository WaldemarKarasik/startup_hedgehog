import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema';
import { DealUpdateWithoutDisputesInputObjectSchema as DealUpdateWithoutDisputesInputObjectSchema } from './DealUpdateWithoutDisputesInput.schema';
import { DealUncheckedUpdateWithoutDisputesInputObjectSchema as DealUncheckedUpdateWithoutDisputesInputObjectSchema } from './DealUncheckedUpdateWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DealUpdateWithoutDisputesInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutDisputesInputObjectSchema)])
}).strict();
export const DealUpdateToOneWithWhereWithoutDisputesInputObjectSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutDisputesInput>;
export const DealUpdateToOneWithWhereWithoutDisputesInputObjectZodSchema = makeSchema();
