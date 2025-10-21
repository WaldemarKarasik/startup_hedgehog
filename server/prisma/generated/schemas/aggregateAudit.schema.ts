import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditOrderByWithRelationInputObjectSchema as AuditOrderByWithRelationInputObjectSchema } from './objects/AuditOrderByWithRelationInput.schema';
import { AuditWhereInputObjectSchema as AuditWhereInputObjectSchema } from './objects/AuditWhereInput.schema';
import { AuditWhereUniqueInputObjectSchema as AuditWhereUniqueInputObjectSchema } from './objects/AuditWhereUniqueInput.schema';
import { AuditCountAggregateInputObjectSchema as AuditCountAggregateInputObjectSchema } from './objects/AuditCountAggregateInput.schema';
import { AuditMinAggregateInputObjectSchema as AuditMinAggregateInputObjectSchema } from './objects/AuditMinAggregateInput.schema';
import { AuditMaxAggregateInputObjectSchema as AuditMaxAggregateInputObjectSchema } from './objects/AuditMaxAggregateInput.schema';

export const AuditAggregateSchema: z.ZodType<Prisma.AuditAggregateArgs> = z.object({ orderBy: z.union([AuditOrderByWithRelationInputObjectSchema, AuditOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditWhereInputObjectSchema.optional(), cursor: AuditWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AuditCountAggregateInputObjectSchema ]).optional(), _min: AuditMinAggregateInputObjectSchema.optional(), _max: AuditMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuditAggregateArgs>;

export const AuditAggregateZodSchema = z.object({ orderBy: z.union([AuditOrderByWithRelationInputObjectSchema, AuditOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditWhereInputObjectSchema.optional(), cursor: AuditWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AuditCountAggregateInputObjectSchema ]).optional(), _min: AuditMinAggregateInputObjectSchema.optional(), _max: AuditMaxAggregateInputObjectSchema.optional() }).strict();