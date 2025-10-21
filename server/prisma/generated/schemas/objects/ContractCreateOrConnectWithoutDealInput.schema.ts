import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractWhereUniqueInputObjectSchema as ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractCreateWithoutDealInputObjectSchema as ContractCreateWithoutDealInputObjectSchema } from './ContractCreateWithoutDealInput.schema';
import { ContractUncheckedCreateWithoutDealInputObjectSchema as ContractUncheckedCreateWithoutDealInputObjectSchema } from './ContractUncheckedCreateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContractWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ContractCreateWithoutDealInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutDealInputObjectSchema)])
}).strict();
export const ContractCreateOrConnectWithoutDealInputObjectSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractCreateOrConnectWithoutDealInput>;
export const ContractCreateOrConnectWithoutDealInputObjectZodSchema = makeSchema();
