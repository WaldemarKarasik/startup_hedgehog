import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DealOrderByWithRelationInputObjectSchema as DealOrderByWithRelationInputObjectSchema } from './objects/DealOrderByWithRelationInput.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './objects/DealWhereInput.schema';
import { DealWhereUniqueInputObjectSchema as DealWhereUniqueInputObjectSchema } from './objects/DealWhereUniqueInput.schema';
import { DealCountAggregateInputObjectSchema as DealCountAggregateInputObjectSchema } from './objects/DealCountAggregateInput.schema';

export const DealCountSchema: z.ZodType<Prisma.DealCountArgs> = z.object({ orderBy: z.union([DealOrderByWithRelationInputObjectSchema, DealOrderByWithRelationInputObjectSchema.array()]).optional(), where: DealWhereInputObjectSchema.optional(), cursor: DealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DealCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DealCountArgs>;

export const DealCountZodSchema = z.object({ orderBy: z.union([DealOrderByWithRelationInputObjectSchema, DealOrderByWithRelationInputObjectSchema.array()]).optional(), where: DealWhereInputObjectSchema.optional(), cursor: DealWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DealCountAggregateInputObjectSchema ]).optional() }).strict();