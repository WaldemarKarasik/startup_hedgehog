import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractWhereInputObjectSchema as ContractWhereInputObjectSchema } from './ContractWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ContractWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ContractWhereInputObjectSchema).optional().nullable()
}).strict();
export const ContractNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ContractNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ContractNullableScalarRelationFilter>;
export const ContractNullableScalarRelationFilterObjectZodSchema = makeSchema();
