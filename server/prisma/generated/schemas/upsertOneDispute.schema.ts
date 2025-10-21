import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeSelectObjectSchema as DisputeSelectObjectSchema } from './objects/DisputeSelect.schema';
import { DisputeIncludeObjectSchema as DisputeIncludeObjectSchema } from './objects/DisputeInclude.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './objects/DisputeWhereUniqueInput.schema';
import { DisputeCreateInputObjectSchema as DisputeCreateInputObjectSchema } from './objects/DisputeCreateInput.schema';
import { DisputeUncheckedCreateInputObjectSchema as DisputeUncheckedCreateInputObjectSchema } from './objects/DisputeUncheckedCreateInput.schema';
import { DisputeUpdateInputObjectSchema as DisputeUpdateInputObjectSchema } from './objects/DisputeUpdateInput.schema';
import { DisputeUncheckedUpdateInputObjectSchema as DisputeUncheckedUpdateInputObjectSchema } from './objects/DisputeUncheckedUpdateInput.schema';

export const DisputeUpsertOneSchema: z.ZodType<Prisma.DisputeUpsertArgs> = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), where: DisputeWhereUniqueInputObjectSchema, create: z.union([ DisputeCreateInputObjectSchema, DisputeUncheckedCreateInputObjectSchema ]), update: z.union([ DisputeUpdateInputObjectSchema, DisputeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DisputeUpsertArgs>;

export const DisputeUpsertOneZodSchema = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), where: DisputeWhereUniqueInputObjectSchema, create: z.union([ DisputeCreateInputObjectSchema, DisputeUncheckedCreateInputObjectSchema ]), update: z.union([ DisputeUpdateInputObjectSchema, DisputeUncheckedUpdateInputObjectSchema ]) }).strict();