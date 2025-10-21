import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './objects/DeveloperApplicationSelect.schema';
import { DeveloperApplicationIncludeObjectSchema as DeveloperApplicationIncludeObjectSchema } from './objects/DeveloperApplicationInclude.schema';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './objects/DeveloperApplicationWhereUniqueInput.schema';

export const DeveloperApplicationFindUniqueSchema: z.ZodType<Prisma.DeveloperApplicationFindUniqueArgs> = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), where: DeveloperApplicationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationFindUniqueArgs>;

export const DeveloperApplicationFindUniqueZodSchema = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), where: DeveloperApplicationWhereUniqueInputObjectSchema }).strict();