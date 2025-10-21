import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeOrderByWithRelationInputObjectSchema as DisputeOrderByWithRelationInputObjectSchema } from './objects/DisputeOrderByWithRelationInput.schema';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './objects/DisputeWhereInput.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './objects/DisputeWhereUniqueInput.schema';
import { DisputeCountAggregateInputObjectSchema as DisputeCountAggregateInputObjectSchema } from './objects/DisputeCountAggregateInput.schema';
import { DisputeMinAggregateInputObjectSchema as DisputeMinAggregateInputObjectSchema } from './objects/DisputeMinAggregateInput.schema';
import { DisputeMaxAggregateInputObjectSchema as DisputeMaxAggregateInputObjectSchema } from './objects/DisputeMaxAggregateInput.schema';

export const DisputeAggregateSchema: z.ZodType<Prisma.DisputeAggregateArgs> = z.object({ orderBy: z.union([DisputeOrderByWithRelationInputObjectSchema, DisputeOrderByWithRelationInputObjectSchema.array()]).optional(), where: DisputeWhereInputObjectSchema.optional(), cursor: DisputeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DisputeCountAggregateInputObjectSchema ]).optional(), _min: DisputeMinAggregateInputObjectSchema.optional(), _max: DisputeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DisputeAggregateArgs>;

export const DisputeAggregateZodSchema = z.object({ orderBy: z.union([DisputeOrderByWithRelationInputObjectSchema, DisputeOrderByWithRelationInputObjectSchema.array()]).optional(), where: DisputeWhereInputObjectSchema.optional(), cursor: DisputeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DisputeCountAggregateInputObjectSchema ]).optional(), _min: DisputeMinAggregateInputObjectSchema.optional(), _max: DisputeMaxAggregateInputObjectSchema.optional() }).strict();