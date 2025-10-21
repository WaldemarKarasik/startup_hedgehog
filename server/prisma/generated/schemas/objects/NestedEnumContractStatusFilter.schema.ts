import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractStatusSchema } from '../enums/ContractStatus.schema'

const nestedenumcontractstatusfilterSchema = z.object({
  equals: ContractStatusSchema.optional(),
  in: ContractStatusSchema.array().optional(),
  notIn: ContractStatusSchema.array().optional(),
  not: z.union([ContractStatusSchema, z.lazy(() => NestedEnumContractStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumContractStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumContractStatusFilter> = nestedenumcontractstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumContractStatusFilter>;
export const NestedEnumContractStatusFilterObjectZodSchema = nestedenumcontractstatusfilterSchema;
