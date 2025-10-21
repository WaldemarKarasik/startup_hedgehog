import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './objects/DeveloperApplicationSelect.schema';
import { DeveloperApplicationCreateManyInputObjectSchema as DeveloperApplicationCreateManyInputObjectSchema } from './objects/DeveloperApplicationCreateManyInput.schema';

export const DeveloperApplicationCreateManyAndReturnSchema: z.ZodType<Prisma.DeveloperApplicationCreateManyAndReturnArgs> = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), data: z.union([ DeveloperApplicationCreateManyInputObjectSchema, z.array(DeveloperApplicationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationCreateManyAndReturnArgs>;

export const DeveloperApplicationCreateManyAndReturnZodSchema = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), data: z.union([ DeveloperApplicationCreateManyInputObjectSchema, z.array(DeveloperApplicationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();