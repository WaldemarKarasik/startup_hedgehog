import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ContractStatusSchema } from '../enums/ContractStatus.schema'

const makeSchema = () => z.object({
  set: ContractStatusSchema.optional()
}).strict();
export const EnumContractStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumContractStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumContractStatusFieldUpdateOperationsInput>;
export const EnumContractStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
