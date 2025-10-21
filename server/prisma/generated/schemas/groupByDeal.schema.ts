import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './objects/DealWhereInput.schema';
import { DealOrderByWithAggregationInputObjectSchema as DealOrderByWithAggregationInputObjectSchema } from './objects/DealOrderByWithAggregationInput.schema';
import { DealScalarWhereWithAggregatesInputObjectSchema as DealScalarWhereWithAggregatesInputObjectSchema } from './objects/DealScalarWhereWithAggregatesInput.schema';
import { DealScalarFieldEnumSchema } from './enums/DealScalarFieldEnum.schema';
import { DealCountAggregateInputObjectSchema as DealCountAggregateInputObjectSchema } from './objects/DealCountAggregateInput.schema';
import { DealMinAggregateInputObjectSchema as DealMinAggregateInputObjectSchema } from './objects/DealMinAggregateInput.schema';
import { DealMaxAggregateInputObjectSchema as DealMaxAggregateInputObjectSchema } from './objects/DealMaxAggregateInput.schema';
import { DealAvgAggregateInputObjectSchema as DealAvgAggregateInputObjectSchema } from './objects/DealAvgAggregateInput.schema';
import { DealSumAggregateInputObjectSchema as DealSumAggregateInputObjectSchema } from './objects/DealSumAggregateInput.schema';

export const DealGroupBySchema: z.ZodType<Prisma.DealGroupByArgs> = z.object({ where: DealWhereInputObjectSchema.optional(), orderBy: z.union([DealOrderByWithAggregationInputObjectSchema, DealOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DealScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DealScalarFieldEnumSchema), _count: z.union([ z.literal(true), DealCountAggregateInputObjectSchema ]).optional(), _min: DealMinAggregateInputObjectSchema.optional(), _max: DealMaxAggregateInputObjectSchema.optional(), _avg: DealAvgAggregateInputObjectSchema.optional(), _sum: DealSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DealGroupByArgs>;

export const DealGroupByZodSchema = z.object({ where: DealWhereInputObjectSchema.optional(), orderBy: z.union([DealOrderByWithAggregationInputObjectSchema, DealOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DealScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DealScalarFieldEnumSchema), _count: z.union([ z.literal(true), DealCountAggregateInputObjectSchema ]).optional(), _min: DealMinAggregateInputObjectSchema.optional(), _max: DealMaxAggregateInputObjectSchema.optional(), _avg: DealAvgAggregateInputObjectSchema.optional(), _sum: DealSumAggregateInputObjectSchema.optional() }).strict();