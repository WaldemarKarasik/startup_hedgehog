import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditOrderByWithRelationInputObjectSchema as AuditOrderByWithRelationInputObjectSchema } from './objects/AuditOrderByWithRelationInput.schema';
import { AuditWhereInputObjectSchema as AuditWhereInputObjectSchema } from './objects/AuditWhereInput.schema';
import { AuditWhereUniqueInputObjectSchema as AuditWhereUniqueInputObjectSchema } from './objects/AuditWhereUniqueInput.schema';
import { AuditCountAggregateInputObjectSchema as AuditCountAggregateInputObjectSchema } from './objects/AuditCountAggregateInput.schema';

export const AuditCountSchema: z.ZodType<Prisma.AuditCountArgs> = z.object({ orderBy: z.union([AuditOrderByWithRelationInputObjectSchema, AuditOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditWhereInputObjectSchema.optional(), cursor: AuditWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AuditCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AuditCountArgs>;

export const AuditCountZodSchema = z.object({ orderBy: z.union([AuditOrderByWithRelationInputObjectSchema, AuditOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditWhereInputObjectSchema.optional(), cursor: AuditWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AuditCountAggregateInputObjectSchema ]).optional() }).strict();