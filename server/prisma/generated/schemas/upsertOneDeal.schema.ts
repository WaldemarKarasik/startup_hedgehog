import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './objects/DealSelect.schema';
import { DealIncludeObjectSchema as DealIncludeObjectSchema } from './objects/DealInclude.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './objects/DealWhereUniqueInput.schema';
import { DealCreateInputObjectSchema as DealCreateInputObjectSchema } from './objects/DealCreateInput.schema';
import { DealUncheckedCreateInputObjectSchema as DealUncheckedCreateInputObjectSchema } from './objects/DealUncheckedCreateInput.schema';
import { DealUpdateInputObjectSchema as DealUpdateInputObjectSchema } from './objects/DealUpdateInput.schema';
import { DealUncheckedUpdateInputObjectSchema as DealUncheckedUpdateInputObjectSchema } from './objects/DealUncheckedUpdateInput.schema';

export const DealUpsertOneSchema: z.ZodType<Prisma.DealUpsertArgs> = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), where: DealWhereUniqueInputObjectSchema, create: z.union([ DealCreateInputObjectSchema, DealUncheckedCreateInputObjectSchema ]), update: z.union([ DealUpdateInputObjectSchema, DealUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DealUpsertArgs>;

export const DealUpsertOneZodSchema = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), where: DealWhereUniqueInputObjectSchema, create: z.union([ DealCreateInputObjectSchema, DealUncheckedCreateInputObjectSchema ]), update: z.union([ DealUpdateInputObjectSchema, DealUncheckedUpdateInputObjectSchema ]) }).strict();