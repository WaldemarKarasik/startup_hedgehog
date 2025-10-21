import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealSelectObjectSchema as DealSelectObjectSchema } from './objects/DealSelect.schema';
import { DealIncludeObjectSchema as DealIncludeObjectSchema } from './objects/DealInclude.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './objects/DealWhereUniqueInput.schema';

export const DealFindUniqueSchema: z.ZodType<Prisma.DealFindUniqueArgs> = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), where: DealWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DealFindUniqueArgs>;

export const DealFindUniqueZodSchema = z.object({ select: DealSelectObjectSchema.optional(), include: DealIncludeObjectSchema.optional(), where: DealWhereUniqueInputObjectSchema }).strict();