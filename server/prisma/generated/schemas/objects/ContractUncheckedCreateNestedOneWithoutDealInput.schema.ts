import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractCreateWithoutDealInputObjectSchema as ContractCreateWithoutDealInputObjectSchema } from './ContractCreateWithoutDealInput.schema';
import { ContractUncheckedCreateWithoutDealInputObjectSchema as ContractUncheckedCreateWithoutDealInputObjectSchema } from './ContractUncheckedCreateWithoutDealInput.schema';
import { ContractCreateOrConnectWithoutDealInputObjectSchema as ContractCreateOrConnectWithoutDealInputObjectSchema } from './ContractCreateOrConnectWithoutDealInput.schema';
import { ContractWhereUniqueInputObjectSchema as ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContractCreateWithoutDealInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutDealInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutDealInputObjectSchema).optional(),
  connect: z.lazy(() => ContractWhereUniqueInputObjectSchema).optional()
}).strict();
export const ContractUncheckedCreateNestedOneWithoutDealInputObjectSchema: z.ZodType<Prisma.ContractUncheckedCreateNestedOneWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractUncheckedCreateNestedOneWithoutDealInput>;
export const ContractUncheckedCreateNestedOneWithoutDealInputObjectZodSchema = makeSchema();
