import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeSelectObjectSchema as DisputeSelectObjectSchema } from './objects/DisputeSelect.schema';
import { DisputeIncludeObjectSchema as DisputeIncludeObjectSchema } from './objects/DisputeInclude.schema';
import { DisputeUpdateInputObjectSchema as DisputeUpdateInputObjectSchema } from './objects/DisputeUpdateInput.schema';
import { DisputeUncheckedUpdateInputObjectSchema as DisputeUncheckedUpdateInputObjectSchema } from './objects/DisputeUncheckedUpdateInput.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './objects/DisputeWhereUniqueInput.schema';

export const DisputeUpdateOneSchema: z.ZodType<Prisma.DisputeUpdateArgs> = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), data: z.union([DisputeUpdateInputObjectSchema, DisputeUncheckedUpdateInputObjectSchema]), where: DisputeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DisputeUpdateArgs>;

export const DisputeUpdateOneZodSchema = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), data: z.union([DisputeUpdateInputObjectSchema, DisputeUncheckedUpdateInputObjectSchema]), where: DisputeWhereUniqueInputObjectSchema }).strict();