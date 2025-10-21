import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './objects/DealSelect.schema';
import { DealCreateManyInputObjectSchema as DealCreateManyInputObjectSchema } from './objects/DealCreateManyInput.schema';

export const DealCreateManyAndReturnSchema: z.ZodType<Prisma.DealCreateManyAndReturnArgs> = z.object({ select: DealSelectObjectSchema.optional(), data: z.union([ DealCreateManyInputObjectSchema, z.array(DealCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DealCreateManyAndReturnArgs>;

export const DealCreateManyAndReturnZodSchema = z.object({ select: DealSelectObjectSchema.optional(), data: z.union([ DealCreateManyInputObjectSchema, z.array(DealCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();