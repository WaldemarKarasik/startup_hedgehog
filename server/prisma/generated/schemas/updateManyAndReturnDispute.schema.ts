import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeSelectObjectSchema as DisputeSelectObjectSchema } from './objects/DisputeSelect.schema';
import { DisputeUpdateManyMutationInputObjectSchema as DisputeUpdateManyMutationInputObjectSchema } from './objects/DisputeUpdateManyMutationInput.schema';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './objects/DisputeWhereInput.schema';

export const DisputeUpdateManyAndReturnSchema: z.ZodType<Prisma.DisputeUpdateManyAndReturnArgs> = z.object({ select: DisputeSelectObjectSchema.optional(), data: DisputeUpdateManyMutationInputObjectSchema, where: DisputeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DisputeUpdateManyAndReturnArgs>;

export const DisputeUpdateManyAndReturnZodSchema = z.object({ select: DisputeSelectObjectSchema.optional(), data: DisputeUpdateManyMutationInputObjectSchema, where: DisputeWhereInputObjectSchema.optional() }).strict();