import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeOrderByWithRelationInputObjectSchema as DisputeOrderByWithRelationInputObjectSchema } from './objects/DisputeOrderByWithRelationInput.schema';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './objects/DisputeWhereInput.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './objects/DisputeWhereUniqueInput.schema';
import { DisputeCountAggregateInputObjectSchema as DisputeCountAggregateInputObjectSchema } from './objects/DisputeCountAggregateInput.schema';

export const DisputeCountSchema: z.ZodType<Prisma.DisputeCountArgs> = z.object({ orderBy: z.union([DisputeOrderByWithRelationInputObjectSchema, DisputeOrderByWithRelationInputObjectSchema.array()]).optional(), where: DisputeWhereInputObjectSchema.optional(), cursor: DisputeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DisputeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DisputeCountArgs>;

export const DisputeCountZodSchema = z.object({ orderBy: z.union([DisputeOrderByWithRelationInputObjectSchema, DisputeOrderByWithRelationInputObjectSchema.array()]).optional(), where: DisputeWhereInputObjectSchema.optional(), cursor: DisputeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DisputeCountAggregateInputObjectSchema ]).optional() }).strict();