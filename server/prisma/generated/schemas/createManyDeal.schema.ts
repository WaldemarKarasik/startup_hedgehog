import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealCreateManyInputObjectSchema as DealCreateManyInputObjectSchema } from './objects/DealCreateManyInput.schema';

export const DealCreateManySchema: z.ZodType<Prisma.DealCreateManyArgs> = z.object({ data: z.union([ DealCreateManyInputObjectSchema, z.array(DealCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DealCreateManyArgs>;

export const DealCreateManyZodSchema = z.object({ data: z.union([ DealCreateManyInputObjectSchema, z.array(DealCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();