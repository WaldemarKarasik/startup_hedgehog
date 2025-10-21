import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealCreateWithoutDisputesInputObjectSchema as DealCreateWithoutDisputesInputObjectSchema } from './DealCreateWithoutDisputesInput.schema';
import { DealUncheckedCreateWithoutDisputesInputObjectSchema as DealUncheckedCreateWithoutDisputesInputObjectSchema } from './DealUncheckedCreateWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DealWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DealCreateWithoutDisputesInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDisputesInputObjectSchema)])
}).strict();
export const DealCreateOrConnectWithoutDisputesInputObjectSchema: z.ZodType<Prisma.DealCreateOrConnectWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateOrConnectWithoutDisputesInput>;
export const DealCreateOrConnectWithoutDisputesInputObjectZodSchema = makeSchema();
