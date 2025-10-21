import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationUpdateManyMutationInputObjectSchema as DeveloperApplicationUpdateManyMutationInputObjectSchema } from './objects/DeveloperApplicationUpdateManyMutationInput.schema';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './objects/DeveloperApplicationWhereInput.schema';

export const DeveloperApplicationUpdateManySchema: z.ZodType<Prisma.DeveloperApplicationUpdateManyArgs> = z.object({ data: DeveloperApplicationUpdateManyMutationInputObjectSchema, where: DeveloperApplicationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationUpdateManyArgs>;

export const DeveloperApplicationUpdateManyZodSchema = z.object({ data: DeveloperApplicationUpdateManyMutationInputObjectSchema, where: DeveloperApplicationWhereInputObjectSchema.optional() }).strict();