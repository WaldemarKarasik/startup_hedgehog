import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './objects/DealWhereInput.schema';

export const DealDeleteManySchema: z.ZodType<Prisma.DealDeleteManyArgs> = z.object({ where: DealWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DealDeleteManyArgs>;

export const DealDeleteManyZodSchema = z.object({ where: DealWhereInputObjectSchema.optional() }).strict();