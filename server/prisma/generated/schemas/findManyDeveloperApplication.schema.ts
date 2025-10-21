import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationIncludeObjectSchema as DeveloperApplicationIncludeObjectSchema } from './objects/DeveloperApplicationInclude.schema';
import { DeveloperApplicationOrderByWithRelationInputObjectSchema as DeveloperApplicationOrderByWithRelationInputObjectSchema } from './objects/DeveloperApplicationOrderByWithRelationInput.schema';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './objects/DeveloperApplicationWhereInput.schema';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './objects/DeveloperApplicationWhereUniqueInput.schema';
import { DeveloperApplicationScalarFieldEnumSchema } from './enums/DeveloperApplicationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DeveloperApplicationFindManySelectSchema: z.ZodType<Prisma.DeveloperApplicationSelect> = z.object({
    id: z.boolean().optional(),
    telegram: z.boolean().optional(),
    productName: z.boolean().optional(),
    productDescription: z.boolean().optional(),
    customizationPrice: z.boolean().optional(),
    revenueSharePercent: z.boolean().optional(),
    githubUrl: z.boolean().optional(),
    demoUrl: z.boolean().optional(),
    videoUrl: z.boolean().optional(),
    hasUsers: z.boolean().optional(),
    userCount: z.boolean().optional(),
    customizationReady: z.boolean().optional(),
    targetBusinesses: z.boolean().optional(),
    portfolio: z.boolean().optional(),
    additionalInfo: z.boolean().optional(),
    status: z.boolean().optional(),
    reviewNotes: z.boolean().optional(),
    reviewedBy: z.boolean().optional(),
    reviewedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationSelect>;

export const DeveloperApplicationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    telegram: z.boolean().optional(),
    productName: z.boolean().optional(),
    productDescription: z.boolean().optional(),
    customizationPrice: z.boolean().optional(),
    revenueSharePercent: z.boolean().optional(),
    githubUrl: z.boolean().optional(),
    demoUrl: z.boolean().optional(),
    videoUrl: z.boolean().optional(),
    hasUsers: z.boolean().optional(),
    userCount: z.boolean().optional(),
    customizationReady: z.boolean().optional(),
    targetBusinesses: z.boolean().optional(),
    portfolio: z.boolean().optional(),
    additionalInfo: z.boolean().optional(),
    status: z.boolean().optional(),
    reviewNotes: z.boolean().optional(),
    reviewedBy: z.boolean().optional(),
    reviewedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DeveloperApplicationFindManySchema: z.ZodType<Prisma.DeveloperApplicationFindManyArgs> = z.object({ select: DeveloperApplicationFindManySelectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), orderBy: z.union([DeveloperApplicationOrderByWithRelationInputObjectSchema, DeveloperApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeveloperApplicationWhereInputObjectSchema.optional(), cursor: DeveloperApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DeveloperApplicationScalarFieldEnumSchema, DeveloperApplicationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationFindManyArgs>;

export const DeveloperApplicationFindManyZodSchema = z.object({ select: DeveloperApplicationFindManySelectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), orderBy: z.union([DeveloperApplicationOrderByWithRelationInputObjectSchema, DeveloperApplicationOrderByWithRelationInputObjectSchema.array()]).optional(), where: DeveloperApplicationWhereInputObjectSchema.optional(), cursor: DeveloperApplicationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DeveloperApplicationScalarFieldEnumSchema, DeveloperApplicationScalarFieldEnumSchema.array()]).optional() }).strict();