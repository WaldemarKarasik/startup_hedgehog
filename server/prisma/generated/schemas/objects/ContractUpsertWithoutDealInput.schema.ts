import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractUpdateWithoutDealInputObjectSchema as ContractUpdateWithoutDealInputObjectSchema } from './ContractUpdateWithoutDealInput.schema';
import { ContractUncheckedUpdateWithoutDealInputObjectSchema as ContractUncheckedUpdateWithoutDealInputObjectSchema } from './ContractUncheckedUpdateWithoutDealInput.schema';
import { ContractCreateWithoutDealInputObjectSchema as ContractCreateWithoutDealInputObjectSchema } from './ContractCreateWithoutDealInput.schema';
import { ContractUncheckedCreateWithoutDealInputObjectSchema as ContractUncheckedCreateWithoutDealInputObjectSchema } from './ContractUncheckedCreateWithoutDealInput.schema';
import { ContractWhereInputObjectSchema as ContractWhereInputObjectSchema } from './ContractWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ContractUpdateWithoutDealInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutDealInputObjectSchema)]),
  create: z.union([z.lazy(() => ContractCreateWithoutDealInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutDealInputObjectSchema)]),
  where: z.lazy(() => ContractWhereInputObjectSchema).optional()
}).strict();
export const ContractUpsertWithoutDealInputObjectSchema: z.ZodType<Prisma.ContractUpsertWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractUpsertWithoutDealInput>;
export const ContractUpsertWithoutDealInputObjectZodSchema = makeSchema();
