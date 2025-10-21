import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeIncludeObjectSchema as DisputeIncludeObjectSchema } from './objects/DisputeInclude.schema';
import { DisputeOrderByWithRelationInputObjectSchema as DisputeOrderByWithRelationInputObjectSchema } from './objects/DisputeOrderByWithRelationInput.schema';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './objects/DisputeWhereInput.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './objects/DisputeWhereUniqueInput.schema';
import { DisputeScalarFieldEnumSchema } from './enums/DisputeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DisputeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DisputeSelect> = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    deal: z.boolean().optional(),
    initiatedBy: z.boolean().optional(),
    initiator: z.boolean().optional(),
    type: z.boolean().optional(),
    stage: z.boolean().optional(),
    status: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    evidenceUrls: z.boolean().optional(),
    resolution: z.boolean().optional(),
    platformAction: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    resolvedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DisputeSelect>;

export const DisputeFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    deal: z.boolean().optional(),
    initiatedBy: z.boolean().optional(),
    initiator: z.boolean().optional(),
    type: z.boolean().optional(),
    stage: z.boolean().optional(),
    status: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    evidenceUrls: z.boolean().optional(),
    resolution: z.boolean().optional(),
    platformAction: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    resolvedAt: z.boolean().optional()
  }).strict();

export const DisputeFindFirstOrThrowSchema: z.ZodType<Prisma.DisputeFindFirstOrThrowArgs> = z.object({ select: DisputeFindFirstOrThrowSelectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), orderBy: z.union([DisputeOrderByWithRelationInputObjectSchema, DisputeOrderByWithRelationInputObjectSchema.array()]).optional(), where: DisputeWhereInputObjectSchema.optional(), cursor: DisputeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DisputeScalarFieldEnumSchema, DisputeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DisputeFindFirstOrThrowArgs>;

export const DisputeFindFirstOrThrowZodSchema = z.object({ select: DisputeFindFirstOrThrowSelectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), orderBy: z.union([DisputeOrderByWithRelationInputObjectSchema, DisputeOrderByWithRelationInputObjectSchema.array()]).optional(), where: DisputeWhereInputObjectSchema.optional(), cursor: DisputeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DisputeScalarFieldEnumSchema, DisputeScalarFieldEnumSchema.array()]).optional() }).strict();