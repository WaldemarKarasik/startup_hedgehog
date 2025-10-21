import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  telegram: z.literal(true).optional(),
  productName: z.literal(true).optional(),
  productDescription: z.literal(true).optional(),
  customizationPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional(),
  githubUrl: z.literal(true).optional(),
  demoUrl: z.literal(true).optional(),
  videoUrl: z.literal(true).optional(),
  hasUsers: z.literal(true).optional(),
  userCount: z.literal(true).optional(),
  customizationReady: z.literal(true).optional(),
  targetBusinesses: z.literal(true).optional(),
  portfolio: z.literal(true).optional(),
  additionalInfo: z.literal(true).optional(),
  status: z.literal(true).optional(),
  reviewNotes: z.literal(true).optional(),
  reviewedBy: z.literal(true).optional(),
  reviewedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DeveloperApplicationMaxAggregateInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationMaxAggregateInputType>;
export const DeveloperApplicationMaxAggregateInputObjectZodSchema = makeSchema();
