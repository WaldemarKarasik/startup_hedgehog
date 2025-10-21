import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeCreateWithoutInitiatorInputObjectSchema as DisputeCreateWithoutInitiatorInputObjectSchema } from './DisputeCreateWithoutInitiatorInput.schema';
import { DisputeUncheckedCreateWithoutInitiatorInputObjectSchema as DisputeUncheckedCreateWithoutInitiatorInputObjectSchema } from './DisputeUncheckedCreateWithoutInitiatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DisputeCreateWithoutInitiatorInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutInitiatorInputObjectSchema)])
}).strict();
export const DisputeCreateOrConnectWithoutInitiatorInputObjectSchema: z.ZodType<Prisma.DisputeCreateOrConnectWithoutInitiatorInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateOrConnectWithoutInitiatorInput>;
export const DisputeCreateOrConnectWithoutInitiatorInputObjectZodSchema = makeSchema();
