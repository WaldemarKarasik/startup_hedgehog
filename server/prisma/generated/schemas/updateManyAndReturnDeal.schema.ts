import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './objects/DealSelect.schema';
import { DealUpdateManyMutationInputObjectSchema as DealUpdateManyMutationInputObjectSchema } from './objects/DealUpdateManyMutationInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './objects/DealWhereInput.schema';

export const DealUpdateManyAndReturnSchema: z.ZodType<Prisma.DealUpdateManyAndReturnArgs> = z.object({ select: DealSelectObjectSchema.optional(), data: DealUpdateManyMutationInputObjectSchema, where: DealWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DealUpdateManyAndReturnArgs>;

export const DealUpdateManyAndReturnZodSchema = z.object({ select: DealSelectObjectSchema.optional(), data: DealUpdateManyMutationInputObjectSchema, where: DealWhereInputObjectSchema.optional() }).strict();