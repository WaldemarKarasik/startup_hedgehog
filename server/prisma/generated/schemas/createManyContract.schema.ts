import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { ContractCreateManyInputObjectSchema as ContractCreateManyInputObjectSchema } from './objects/ContractCreateManyInput.schema';

export const ContractCreateManySchema: z.ZodType<Prisma.ContractCreateManyArgs> = z.object({ data: z.union([ ContractCreateManyInputObjectSchema, z.array(ContractCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ContractCreateManyArgs>;

export const ContractCreateManyZodSchema = z.object({ data: z.union([ ContractCreateManyInputObjectSchema, z.array(ContractCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();