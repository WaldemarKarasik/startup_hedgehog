import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './DisputeWhereUniqueInput.schema';
import { DisputeCreateWithoutDealInputObjectSchema as DisputeCreateWithoutDealInputObjectSchema } from './DisputeCreateWithoutDealInput.schema';
import { DisputeUncheckedCreateWithoutDealInputObjectSchema as DisputeUncheckedCreateWithoutDealInputObjectSchema } from './DisputeUncheckedCreateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DisputeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DisputeCreateWithoutDealInputObjectSchema), z.lazy(() => DisputeUncheckedCreateWithoutDealInputObjectSchema)])
}).strict();
export const DisputeCreateOrConnectWithoutDealInputObjectSchema: z.ZodType<Prisma.DisputeCreateOrConnectWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateOrConnectWithoutDealInput>;
export const DisputeCreateOrConnectWithoutDealInputObjectZodSchema = makeSchema();
