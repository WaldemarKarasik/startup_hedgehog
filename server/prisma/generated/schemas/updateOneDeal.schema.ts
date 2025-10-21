import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './objects/DealSelect.schema';
import { DealIncludeObjectSchema as DealIncludeObjectSchema } from './objects/DealInclude.schema';
import { DealUpdateInputObjectSchema as DealUpdateInputObjectSchema } from './objects/DealUpdateInput.schema';
import { DealUncheckedUpdateInputObjectSchema as DealUncheckedUpdateInputObjectSchema } from './objects/DealUncheckedUpdateInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './objects/DealWhereUniqueInput.schema';

export const DealUpdateOneSchema: z.ZodType<Prisma.DealUpdateArgs> = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), data: z.union([DealUpdateInputObjectSchema, DealUncheckedUpdateInputObjectSchema]), where: DealWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DealUpdateArgs>;

export const DealUpdateOneZodSchema = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), data: z.union([DealUpdateInputObjectSchema, DealUncheckedUpdateInputObjectSchema]), where: DealWhereUniqueInputObjectSchema }).strict();