import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './objects/DisputeWhereInput.schema';
import { DisputeOrderByWithAggregationInputObjectSchema as DisputeOrderByWithAggregationInputObjectSchema } from './objects/DisputeOrderByWithAggregationInput.schema';
import { DisputeScalarWhereWithAggregatesInputObjectSchema as DisputeScalarWhereWithAggregatesInputObjectSchema } from './objects/DisputeScalarWhereWithAggregatesInput.schema';
import { DisputeScalarFieldEnumSchema } from './enums/DisputeScalarFieldEnum.schema';
import { DisputeCountAggregateInputObjectSchema as DisputeCountAggregateInputObjectSchema } from './objects/DisputeCountAggregateInput.schema';
import { DisputeMinAggregateInputObjectSchema as DisputeMinAggregateInputObjectSchema } from './objects/DisputeMinAggregateInput.schema';
import { DisputeMaxAggregateInputObjectSchema as DisputeMaxAggregateInputObjectSchema } from './objects/DisputeMaxAggregateInput.schema';

export const DisputeGroupBySchema: z.ZodType<Prisma.DisputeGroupByArgs> = z.object({ where: DisputeWhereInputObjectSchema.optional(), orderBy: z.union([DisputeOrderByWithAggregationInputObjectSchema, DisputeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DisputeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DisputeScalarFieldEnumSchema), _count: z.union([ z.literal(true), DisputeCountAggregateInputObjectSchema ]).optional(), _min: DisputeMinAggregateInputObjectSchema.optional(), _max: DisputeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DisputeGroupByArgs>;

export const DisputeGroupByZodSchema = z.object({ where: DisputeWhereInputObjectSchema.optional(), orderBy: z.union([DisputeOrderByWithAggregationInputObjectSchema, DisputeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DisputeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DisputeScalarFieldEnumSchema), _count: z.union([ z.literal(true), DisputeCountAggregateInputObjectSchema ]).optional(), _min: DisputeMinAggregateInputObjectSchema.optional(), _max: DisputeMaxAggregateInputObjectSchema.optional() }).strict();