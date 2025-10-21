import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './objects/DeveloperApplicationWhereInput.schema';

export const DeveloperApplicationDeleteManySchema: z.ZodType<Prisma.DeveloperApplicationDeleteManyArgs> = z.object({ where: DeveloperApplicationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationDeleteManyArgs>;

export const DeveloperApplicationDeleteManyZodSchema = z.object({ where: DeveloperApplicationWhereInputObjectSchema.optional() }).strict();