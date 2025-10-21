import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationCreateManyInputObjectSchema as DeveloperApplicationCreateManyInputObjectSchema } from './objects/DeveloperApplicationCreateManyInput.schema';

export const DeveloperApplicationCreateManySchema: z.ZodType<Prisma.DeveloperApplicationCreateManyArgs> = z.object({ data: z.union([ DeveloperApplicationCreateManyInputObjectSchema, z.array(DeveloperApplicationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationCreateManyArgs>;

export const DeveloperApplicationCreateManyZodSchema = z.object({ data: z.union([ DeveloperApplicationCreateManyInputObjectSchema, z.array(DeveloperApplicationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();