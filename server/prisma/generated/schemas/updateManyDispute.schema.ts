import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeUpdateManyMutationInputObjectSchema as DisputeUpdateManyMutationInputObjectSchema } from './objects/DisputeUpdateManyMutationInput.schema';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './objects/DisputeWhereInput.schema';

export const DisputeUpdateManySchema: z.ZodType<Prisma.DisputeUpdateManyArgs> = z.object({ data: DisputeUpdateManyMutationInputObjectSchema, where: DisputeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DisputeUpdateManyArgs>;

export const DisputeUpdateManyZodSchema = z.object({ data: DisputeUpdateManyMutationInputObjectSchema, where: DisputeWhereInputObjectSchema.optional() }).strict();