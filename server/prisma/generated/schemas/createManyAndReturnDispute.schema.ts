import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeSelectObjectSchema as DisputeSelectObjectSchema } from './objects/DisputeSelect.schema';
import { DisputeCreateManyInputObjectSchema as DisputeCreateManyInputObjectSchema } from './objects/DisputeCreateManyInput.schema';

export const DisputeCreateManyAndReturnSchema: z.ZodType<Prisma.DisputeCreateManyAndReturnArgs> = z.object({ select: DisputeSelectObjectSchema.optional(), data: z.union([ DisputeCreateManyInputObjectSchema, z.array(DisputeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DisputeCreateManyAndReturnArgs>;

export const DisputeCreateManyAndReturnZodSchema = z.object({ select: DisputeSelectObjectSchema.optional(), data: z.union([ DisputeCreateManyInputObjectSchema, z.array(DisputeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();