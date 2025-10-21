import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutDisputesInputObjectSchema as DealCreateWithoutDisputesInputObjectSchema } from './DealCreateWithoutDisputesInput.schema';
import { DealUncheckedCreateWithoutDisputesInputObjectSchema as DealUncheckedCreateWithoutDisputesInputObjectSchema } from './DealUncheckedCreateWithoutDisputesInput.schema';
import { DealCreateOrConnectWithoutDisputesInputObjectSchema as DealCreateOrConnectWithoutDisputesInputObjectSchema } from './DealCreateOrConnectWithoutDisputesInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutDisputesInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDisputesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutDisputesInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional()
}).strict();
export const DealCreateNestedOneWithoutDisputesInputObjectSchema: z.ZodType<Prisma.DealCreateNestedOneWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateNestedOneWithoutDisputesInput>;
export const DealCreateNestedOneWithoutDisputesInputObjectZodSchema = makeSchema();
