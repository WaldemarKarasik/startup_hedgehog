import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditWhereInputObjectSchema as AuditWhereInputObjectSchema } from './objects/AuditWhereInput.schema';
import { AuditOrderByWithAggregationInputObjectSchema as AuditOrderByWithAggregationInputObjectSchema } from './objects/AuditOrderByWithAggregationInput.schema';
import { AuditScalarWhereWithAggregatesInputObjectSchema as AuditScalarWhereWithAggregatesInputObjectSchema } from './objects/AuditScalarWhereWithAggregatesInput.schema';
import { AuditScalarFieldEnumSchema } from './enums/AuditScalarFieldEnum.schema';
import { AuditCountAggregateInputObjectSchema as AuditCountAggregateInputObjectSchema } from './objects/AuditCountAggregateInput.schema';
import { AuditMinAggregateInputObjectSchema as AuditMinAggregateInputObjectSchema } from './objects/AuditMinAggregateInput.schema';
import { AuditMaxAggregateInputObjectSchema as AuditMaxAggregateInputObjectSchema } from './objects/AuditMaxAggregateInput.schema';

export const AuditGroupBySchema: z.ZodType<Prisma.AuditGroupByArgs> = z.object({ where: AuditWhereInputObjectSchema.optional(), orderBy: z.union([AuditOrderByWithAggregationInputObjectSchema, AuditOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AuditScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AuditScalarFieldEnumSchema), _count: z.union([ z.literal(true), AuditCountAggregateInputObjectSchema ]).optional(), _min: AuditMinAggregateInputObjectSchema.optional(), _max: AuditMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuditGroupByArgs>;

export const AuditGroupByZodSchema = z.object({ where: AuditWhereInputObjectSchema.optional(), orderBy: z.union([AuditOrderByWithAggregationInputObjectSchema, AuditOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AuditScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AuditScalarFieldEnumSchema), _count: z.union([ z.literal(true), AuditCountAggregateInputObjectSchema ]).optional(), _min: AuditMinAggregateInputObjectSchema.optional(), _max: AuditMaxAggregateInputObjectSchema.optional() }).strict();