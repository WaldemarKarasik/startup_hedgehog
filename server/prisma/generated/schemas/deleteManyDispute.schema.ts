import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './objects/DisputeWhereInput.schema';

export const DisputeDeleteManySchema: z.ZodType<Prisma.DisputeDeleteManyArgs> = z.object({ where: DisputeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DisputeDeleteManyArgs>;

export const DisputeDeleteManyZodSchema = z.object({ where: DisputeWhereInputObjectSchema.optional() }).strict();