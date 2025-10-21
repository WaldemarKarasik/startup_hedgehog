import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  reputation: z.literal(true).optional(),
  trustScore: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  reviewCount: z.literal(true).optional()
}).strict();
export const UserSumAggregateInputObjectSchema: z.ZodType<Prisma.UserSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UserSumAggregateInputType>;
export const UserSumAggregateInputObjectZodSchema = makeSchema();
