import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractWhereInputObjectSchema as ContractWhereInputObjectSchema } from './ContractWhereInput.schema';
import { ContractUpdateWithoutDealInputObjectSchema as ContractUpdateWithoutDealInputObjectSchema } from './ContractUpdateWithoutDealInput.schema';
import { ContractUncheckedUpdateWithoutDealInputObjectSchema as ContractUncheckedUpdateWithoutDealInputObjectSchema } from './ContractUncheckedUpdateWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContractWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ContractUpdateWithoutDealInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutDealInputObjectSchema)])
}).strict();
export const ContractUpdateToOneWithWhereWithoutDealInputObjectSchema: z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutDealInput>;
export const ContractUpdateToOneWithWhereWithoutDealInputObjectZodSchema = makeSchema();
