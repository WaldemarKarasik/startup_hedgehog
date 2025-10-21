import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractStatusSchema } from '../enums/ContractStatus.schema';
import { NestedEnumContractStatusFilterObjectSchema as NestedEnumContractStatusFilterObjectSchema } from './NestedEnumContractStatusFilter.schema'

const makeSchema = () => z.object({
  equals: ContractStatusSchema.optional(),
  in: ContractStatusSchema.array().optional(),
  notIn: ContractStatusSchema.array().optional(),
  not: z.union([ContractStatusSchema, z.lazy(() => NestedEnumContractStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumContractStatusFilterObjectSchema: z.ZodType<Prisma.EnumContractStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumContractStatusFilter>;
export const EnumContractStatusFilterObjectZodSchema = makeSchema();
