import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealUpdateWithoutDisputesInputObjectSchema as DealUpdateWithoutDisputesInputObjectSchema } from './DealUpdateWithoutDisputesInput.schema';
import { DealUncheckedUpdateWithoutDisputesInputObjectSchema as DealUncheckedUpdateWithoutDisputesInputObjectSchema } from './DealUncheckedUpdateWithoutDisputesInput.schema';
import { DealCreateWithoutDisputesInputObjectSchema as DealCreateWithoutDisputesInputObjectSchema } from './DealCreateWithoutDisputesInput.schema';
import { DealUncheckedCreateWithoutDisputesInputObjectSchema as DealUncheckedCreateWithoutDisputesInputObjectSchema } from './DealUncheckedCreateWithoutDisputesInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DealUpdateWithoutDisputesInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutDisputesInputObjectSchema)]),
  create: z.union([z.lazy(() => DealCreateWithoutDisputesInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDisputesInputObjectSchema)]),
  where: z.lazy(() => DealWhereInputObjectSchema).optional()
}).strict();
export const DealUpsertWithoutDisputesInputObjectSchema: z.ZodType<Prisma.DealUpsertWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpsertWithoutDisputesInput>;
export const DealUpsertWithoutDisputesInputObjectZodSchema = makeSchema();
