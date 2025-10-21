import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './objects/DeveloperApplicationSelect.schema';
import { DeveloperApplicationUpdateManyMutationInputObjectSchema as DeveloperApplicationUpdateManyMutationInputObjectSchema } from './objects/DeveloperApplicationUpdateManyMutationInput.schema';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './objects/DeveloperApplicationWhereInput.schema';

export const DeveloperApplicationUpdateManyAndReturnSchema: z.ZodType<Prisma.DeveloperApplicationUpdateManyAndReturnArgs> = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), data: DeveloperApplicationUpdateManyMutationInputObjectSchema, where: DeveloperApplicationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationUpdateManyAndReturnArgs>;

export const DeveloperApplicationUpdateManyAndReturnZodSchema = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), data: DeveloperApplicationUpdateManyMutationInputObjectSchema, where: DeveloperApplicationWhereInputObjectSchema.optional() }).strict();