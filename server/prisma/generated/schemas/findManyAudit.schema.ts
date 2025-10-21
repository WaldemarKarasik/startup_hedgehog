import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { AuditOrderByWithRelationInputObjectSchema as AuditOrderByWithRelationInputObjectSchema } from './objects/AuditOrderByWithRelationInput.schema';
import { AuditWhereInputObjectSchema as AuditWhereInputObjectSchema } from './objects/AuditWhereInput.schema';
import { AuditWhereUniqueInputObjectSchema as AuditWhereUniqueInputObjectSchema } from './objects/AuditWhereUniqueInput.schema';
import { AuditScalarFieldEnumSchema } from './enums/AuditScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuditFindManySelectSchema: z.ZodType<Prisma.AuditSelect> = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    flags: z.boolean().optional(),
    priority: z.boolean().optional(),
    findings: z.boolean().optional(),
    actions: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    completedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AuditSelect>;

export const AuditFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    flags: z.boolean().optional(),
    priority: z.boolean().optional(),
    findings: z.boolean().optional(),
    actions: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    completedAt: z.boolean().optional()
  }).strict();

export const AuditFindManySchema: z.ZodType<Prisma.AuditFindManyArgs> = z.object({ select: AuditFindManySelectSchema.optional(),  orderBy: z.union([AuditOrderByWithRelationInputObjectSchema, AuditOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditWhereInputObjectSchema.optional(), cursor: AuditWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditScalarFieldEnumSchema, AuditScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AuditFindManyArgs>;

export const AuditFindManyZodSchema = z.object({ select: AuditFindManySelectSchema.optional(),  orderBy: z.union([AuditOrderByWithRelationInputObjectSchema, AuditOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuditWhereInputObjectSchema.optional(), cursor: AuditWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuditScalarFieldEnumSchema, AuditScalarFieldEnumSchema.array()]).optional() }).strict();