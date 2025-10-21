import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './objects/DealSelect.schema';
import { DealIncludeObjectSchema as DealIncludeObjectSchema } from './objects/DealInclude.schema';
import { DealCreateInputObjectSchema as DealCreateInputObjectSchema } from './objects/DealCreateInput.schema';
import { DealUncheckedCreateInputObjectSchema as DealUncheckedCreateInputObjectSchema } from './objects/DealUncheckedCreateInput.schema';

export const DealCreateOneSchema: z.ZodType<Prisma.DealCreateArgs> = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), data: z.union([DealCreateInputObjectSchema, DealUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DealCreateArgs>;

export const DealCreateOneZodSchema = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), data: z.union([DealCreateInputObjectSchema, DealUncheckedCreateInputObjectSchema]) }).strict();