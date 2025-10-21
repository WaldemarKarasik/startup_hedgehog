import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeCreateManyInputObjectSchema as DisputeCreateManyInputObjectSchema } from './objects/DisputeCreateManyInput.schema';

export const DisputeCreateManySchema: z.ZodType<Prisma.DisputeCreateManyArgs> = z.object({ data: z.union([ DisputeCreateManyInputObjectSchema, z.array(DisputeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DisputeCreateManyArgs>;

export const DisputeCreateManyZodSchema = z.object({ data: z.union([ DisputeCreateManyInputObjectSchema, z.array(DisputeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();