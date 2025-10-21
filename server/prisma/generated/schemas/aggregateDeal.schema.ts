import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealOrderByWithRelationInputObjectSchema as DealOrderByWithRelationInputObjectSchema } from './objects/DealOrderByWithRelationInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './objects/DealWhereInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './objects/DealWhereUniqueInput.schema';
import { DealCountAggregateInputObjectSchema as DealCountAggregateInputObjectSchema } from './objects/DealCountAggregateInput.schema';
import { DealMinAggregateInputObjectSchema as DealMinAggregateInputObjectSchema } from './objects/DealMinAggregateInput.schema';
import { DealMaxAggregateInputObjectSchema as DealMaxAggregateInputObjectSchema } from './objects/DealMaxAggregateInput.schema';
import { DealAvgAggregateInputObjectSchema as DealAvgAggregateInputObjectSchema } from './objects/DealAvgAggregateInput.schema';
import { DealSumAggregateInputObjectSchema as DealSumAggregateInputObjectSchema } from './objects/DealSumAggregateInput.schema';

export const DealAggregateSchema: z.ZodType<Prisma.DealAggregateArgs> = z.object({ orderBy: z.union([DealOrderByWithRelationInputObjectSchema, DealOrderByWithRelationInputObjectSchema.array()]).optional(), where: DealWhereInputObjectSchema.optional(), cursor: DealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DealCountAggregateInputObjectSchema ]).optional(), _min: DealMinAggregateInputObjectSchema.optional(), _max: DealMaxAggregateInputObjectSchema.optional(), _avg: DealAvgAggregateInputObjectSchema.optional(), _sum: DealSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DealAggregateArgs>;

export const DealAggregateZodSchema = z.object({ orderBy: z.union([DealOrderByWithRelationInputObjectSchema, DealOrderByWithRelationInputObjectSchema.array()]).optional(), where: DealWhereInputObjectSchema.optional(), cursor: DealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DealCountAggregateInputObjectSchema ]).optional(), _min: DealMinAggregateInputObjectSchema.optional(), _max: DealMaxAggregateInputObjectSchema.optional(), _avg: DealAvgAggregateInputObjectSchema.optional(), _sum: DealSumAggregateInputObjectSchema.optional() }).strict();