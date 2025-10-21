import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './objects/DealSelect.schema';
import { DealIncludeObjectSchema as DealIncludeObjectSchema } from './objects/DealInclude.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './objects/DealWhereUniqueInput.schema';

export const DealDeleteOneSchema: z.ZodType<Prisma.DealDeleteArgs> = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), where: DealWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DealDeleteArgs>;

export const DealDeleteOneZodSchema = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), where: DealWhereUniqueInputObjectSchema }).strict();