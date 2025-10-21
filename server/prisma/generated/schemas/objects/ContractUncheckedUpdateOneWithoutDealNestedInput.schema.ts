import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractCreateWithoutDealInputObjectSchema as ContractCreateWithoutDealInputObjectSchema } from './ContractCreateWithoutDealInput.schema';
import { ContractUncheckedCreateWithoutDealInputObjectSchema as ContractUncheckedCreateWithoutDealInputObjectSchema } from './ContractUncheckedCreateWithoutDealInput.schema';
import { ContractCreateOrConnectWithoutDealInputObjectSchema as ContractCreateOrConnectWithoutDealInputObjectSchema } from './ContractCreateOrConnectWithoutDealInput.schema';
import { ContractUpsertWithoutDealInputObjectSchema as ContractUpsertWithoutDealInputObjectSchema } from './ContractUpsertWithoutDealInput.schema';
import { ContractWhereInputObjectSchema as ContractWhereInputObjectSchema } from './ContractWhereInput.schema';
import { ContractWhereUniqueInputObjectSchema as ContractWhereUniqueInputObjectSchema } from './ContractWhereUniqueInput.schema';
import { ContractUpdateToOneWithWhereWithoutDealInputObjectSchema as ContractUpdateToOneWithWhereWithoutDealInputObjectSchema } from './ContractUpdateToOneWithWhereWithoutDealInput.schema';
import { ContractUpdateWithoutDealInputObjectSchema as ContractUpdateWithoutDealInputObjectSchema } from './ContractUpdateWithoutDealInput.schema';
import { ContractUncheckedUpdateWithoutDealInputObjectSchema as ContractUncheckedUpdateWithoutDealInputObjectSchema } from './ContractUncheckedUpdateWithoutDealInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContractCreateWithoutDealInputObjectSchema), z.lazy(() => ContractUncheckedCreateWithoutDealInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutDealInputObjectSchema).optional(),
  upsert: z.lazy(() => ContractUpsertWithoutDealInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ContractWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ContractWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ContractWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ContractUpdateToOneWithWhereWithoutDealInputObjectSchema), z.lazy(() => ContractUpdateWithoutDealInputObjectSchema), z.lazy(() => ContractUncheckedUpdateWithoutDealInputObjectSchema)]).optional()
}).strict();
export const ContractUncheckedUpdateOneWithoutDealNestedInputObjectSchema: z.ZodType<Prisma.ContractUncheckedUpdateOneWithoutDealNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractUncheckedUpdateOneWithoutDealNestedInput>;
export const ContractUncheckedUpdateOneWithoutDealNestedInputObjectZodSchema = makeSchema();
