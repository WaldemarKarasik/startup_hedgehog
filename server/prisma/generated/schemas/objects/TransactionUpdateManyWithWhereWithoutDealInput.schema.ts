import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { TransactionScalarWhereInputObjectSchema as TransactionScalarWhereInputObjectSchema } from './TransactionScalarWhereInput.schema';
import { TransactionUpdateManyMutationInputObjectSchema as TransactionUpdateManyMutationInputObjectSchema } from './TransactionUpdateManyMutationInput.schema';
import { TransactionUncheckedUpdateManyWithoutDealInputObjectSchema as TransactionUncheckedUpdateManyWithoutDealInputObjectSchema } from './TransactionUncheckedUpdateManyWithoutDealInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TransactionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TransactionUpdateManyMutationInputObjectSchema), z.lazy(() => TransactionUncheckedUpdateManyWithoutDealInputObjectSchema)])
}).strict();
export const TransactionUpdateManyWithWhereWithoutDealInputObjectSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutDealInput>;
export const TransactionUpdateManyWithWhereWithoutDealInputObjectZodSchema = makeSchema();
