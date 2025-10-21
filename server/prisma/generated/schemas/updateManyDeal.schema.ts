import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealUpdateManyMutationInputObjectSchema as DealUpdateManyMutationInputObjectSchema } from './objects/DealUpdateManyMutationInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './objects/DealWhereInput.schema';

export const DealUpdateManySchema: z.ZodType<Prisma.DealUpdateManyArgs> = z.object({ data: DealUpdateManyMutationInputObjectSchema, where: DealWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DealUpdateManyArgs>;

export const DealUpdateManyZodSchema = z.object({ data: DealUpdateManyMutationInputObjectSchema, where: DealWhereInputObjectSchema.optional() }).strict();