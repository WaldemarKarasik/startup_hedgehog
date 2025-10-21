import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { TransactionIncludeObjectSchema as TransactionIncludeObjectSchema } from './objects/TransactionInclude.schema';
import { TransactionOrderByWithRelationInputObjectSchema as TransactionOrderByWithRelationInputObjectSchema } from './objects/TransactionOrderByWithRelationInput.schema';
import { TransactionWhereInputObjectSchema as TransactionWhereInputObjectSchema } from './objects/TransactionWhereInput.schema';
import { TransactionWhereUniqueInputObjectSchema as TransactionWhereUniqueInputObjectSchema } from './objects/TransactionWhereUniqueInput.schema';
import { TransactionScalarFieldEnumSchema } from './enums/TransactionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionFindFirstSelectSchema: z.ZodType<Prisma.TransactionSelect> = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    deal: z.boolean().optional(),
    amount: z.boolean().optional(),
    platformFee: z.boolean().optional(),
    developerAmount: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    paymentId: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    payoutId: z.boolean().optional(),
    description: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TransactionSelect>;

export const TransactionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    dealId: z.boolean().optional(),
    deal: z.boolean().optional(),
    amount: z.boolean().optional(),
    platformFee: z.boolean().optional(),
    developerAmount: z.boolean().optional(),
    type: z.boolean().optional(),
    status: z.boolean().optional(),
    paymentId: z.boolean().optional(),
    paymentMethod: z.boolean().optional(),
    payoutId: z.boolean().optional(),
    description: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const TransactionFindFirstSchema: z.ZodType<Prisma.TransactionFindFirstArgs> = z.object({ select: TransactionFindFirstSelectSchema.optional(), include: TransactionIncludeObjectSchema.optional(), orderBy: z.union([TransactionOrderByWithRelationInputObjectSchema, TransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TransactionWhereInputObjectSchema.optional(), cursor: TransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TransactionScalarFieldEnumSchema, TransactionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TransactionFindFirstArgs>;

export const TransactionFindFirstZodSchema = z.object({ select: TransactionFindFirstSelectSchema.optional(), include: TransactionIncludeObjectSchema.optional(), orderBy: z.union([TransactionOrderByWithRelationInputObjectSchema, TransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: TransactionWhereInputObjectSchema.optional(), cursor: TransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TransactionScalarFieldEnumSchema, TransactionScalarFieldEnumSchema.array()]).optional() }).strict();