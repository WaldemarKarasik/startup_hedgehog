import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './objects/DeveloperApplicationSelect.schema';
import { DeveloperApplicationIncludeObjectSchema as DeveloperApplicationIncludeObjectSchema } from './objects/DeveloperApplicationInclude.schema';
import { DeveloperApplicationUpdateInputObjectSchema as DeveloperApplicationUpdateInputObjectSchema } from './objects/DeveloperApplicationUpdateInput.schema';
import { DeveloperApplicationUncheckedUpdateInputObjectSchema as DeveloperApplicationUncheckedUpdateInputObjectSchema } from './objects/DeveloperApplicationUncheckedUpdateInput.schema';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './objects/DeveloperApplicationWhereUniqueInput.schema';

export const DeveloperApplicationUpdateOneSchema: z.ZodType<Prisma.DeveloperApplicationUpdateArgs> = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), data: z.union([DeveloperApplicationUpdateInputObjectSchema, DeveloperApplicationUncheckedUpdateInputObjectSchema]), where: DeveloperApplicationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationUpdateArgs>;

export const DeveloperApplicationUpdateOneZodSchema = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), data: z.union([DeveloperApplicationUpdateInputObjectSchema, DeveloperApplicationUncheckedUpdateInputObjectSchema]), where: DeveloperApplicationWhereUniqueInputObjectSchema }).strict();