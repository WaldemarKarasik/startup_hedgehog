import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutDisputesInputObjectSchema as DealCreateWithoutDisputesInputObjectSchema } from './DealCreateWithoutDisputesInput.schema';
import { DealUncheckedCreateWithoutDisputesInputObjectSchema as DealUncheckedCreateWithoutDisputesInputObjectSchema } from './DealUncheckedCreateWithoutDisputesInput.schema';
import { DealCreateOrConnectWithoutDisputesInputObjectSchema as DealCreateOrConnectWithoutDisputesInputObjectSchema } from './DealCreateOrConnectWithoutDisputesInput.schema';
import { DealUpsertWithoutDisputesInputObjectSchema as DealUpsertWithoutDisputesInputObjectSchema } from './DealUpsertWithoutDisputesInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateToOneWithWhereWithoutDisputesInputObjectSchema as DealUpdateToOneWithWhereWithoutDisputesInputObjectSchema } from './DealUpdateToOneWithWhereWithoutDisputesInput.schema';
import { DealUpdateWithoutDisputesInputObjectSchema as DealUpdateWithoutDisputesInputObjectSchema } from './DealUpdateWithoutDisputesInput.schema';
import { DealUncheckedUpdateWithoutDisputesInputObjectSchema as DealUncheckedUpdateWithoutDisputesInputObjectSchema } from './DealUncheckedUpdateWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutDisputesInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutDisputesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutDisputesInputObjectSchema).optional(),
  upsert: z.lazy(() => DealUpsertWithoutDisputesInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DealUpdateToOneWithWhereWithoutDisputesInputObjectSchema), z.lazy(() => DealUpdateWithoutDisputesInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutDisputesInputObjectSchema)]).optional()
}).strict();
export const DealUpdateOneRequiredWithoutDisputesNestedInputObjectSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutDisputesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateOneRequiredWithoutDisputesNestedInput>;
export const DealUpdateOneRequiredWithoutDisputesNestedInputObjectZodSchema = makeSchema();
