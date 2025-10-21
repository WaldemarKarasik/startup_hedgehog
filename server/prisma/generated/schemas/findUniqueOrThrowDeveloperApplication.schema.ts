import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './objects/DeveloperApplicationSelect.schema';
import { DeveloperApplicationIncludeObjectSchema as DeveloperApplicationIncludeObjectSchema } from './objects/DeveloperApplicationInclude.schema';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './objects/DeveloperApplicationWhereUniqueInput.schema';

export const DeveloperApplicationFindUniqueOrThrowSchema: z.ZodType<Prisma.DeveloperApplicationFindUniqueOrThrowArgs> = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), where: DeveloperApplicationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationFindUniqueOrThrowArgs>;

export const DeveloperApplicationFindUniqueOrThrowZodSchema = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), where: DeveloperApplicationWhereUniqueInputObjectSchema }).strict();