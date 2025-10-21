import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './objects/DeveloperApplicationSelect.schema';
import { DeveloperApplicationIncludeObjectSchema as DeveloperApplicationIncludeObjectSchema } from './objects/DeveloperApplicationInclude.schema';
import { DeveloperApplicationCreateInputObjectSchema as DeveloperApplicationCreateInputObjectSchema } from './objects/DeveloperApplicationCreateInput.schema';
import { DeveloperApplicationUncheckedCreateInputObjectSchema as DeveloperApplicationUncheckedCreateInputObjectSchema } from './objects/DeveloperApplicationUncheckedCreateInput.schema';

export const DeveloperApplicationCreateOneSchema: z.ZodType<Prisma.DeveloperApplicationCreateArgs> = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), data: z.union([DeveloperApplicationCreateInputObjectSchema, DeveloperApplicationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationCreateArgs>;

export const DeveloperApplicationCreateOneZodSchema = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), data: z.union([DeveloperApplicationCreateInputObjectSchema, DeveloperApplicationUncheckedCreateInputObjectSchema]) }).strict();