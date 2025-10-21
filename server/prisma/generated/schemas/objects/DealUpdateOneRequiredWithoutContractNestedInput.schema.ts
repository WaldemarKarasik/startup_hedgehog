import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateWithoutContractInputObjectSchema as DealCreateWithoutContractInputObjectSchema } from './DealCreateWithoutContractInput.schema';
import { DealUncheckedCreateWithoutContractInputObjectSchema as DealUncheckedCreateWithoutContractInputObjectSchema } from './DealUncheckedCreateWithoutContractInput.schema';
import { DealCreateOrConnectWithoutContractInputObjectSchema as DealCreateOrConnectWithoutContractInputObjectSchema } from './DealCreateOrConnectWithoutContractInput.schema';
import { DealUpsertWithoutContractInputObjectSchema as DealUpsertWithoutContractInputObjectSchema } from './DealUpsertWithoutContractInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './DealWhereUniqueInput.schema';
import { DealUpdateToOneWithWhereWithoutContractInputObjectSchema as DealUpdateToOneWithWhereWithoutContractInputObjectSchema } from './DealUpdateToOneWithWhereWithoutContractInput.schema';
import { DealUpdateWithoutContractInputObjectSchema as DealUpdateWithoutContractInputObjectSchema } from './DealUpdateWithoutContractInput.schema';
import { DealUncheckedUpdateWithoutContractInputObjectSchema as DealUncheckedUpdateWithoutContractInputObjectSchema } from './DealUncheckedUpdateWithoutContractInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DealCreateWithoutContractInputObjectSchema), z.lazy(() => DealUncheckedCreateWithoutContractInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DealCreateOrConnectWithoutContractInputObjectSchema).optional(),
  upsert: z.lazy(() => DealUpsertWithoutContractInputObjectSchema).optional(),
  connect: z.lazy(() => DealWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DealUpdateToOneWithWhereWithoutContractInputObjectSchema), z.lazy(() => DealUpdateWithoutContractInputObjectSchema), z.lazy(() => DealUncheckedUpdateWithoutContractInputObjectSchema)]).optional()
}).strict();
export const DealUpdateOneRequiredWithoutContractNestedInputObjectSchema: z.ZodType<Prisma.DealUpdateOneRequiredWithoutContractNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DealUpdateOneRequiredWithoutContractNestedInput>;
export const DealUpdateOneRequiredWithoutContractNestedInputObjectZodSchema = makeSchema();
