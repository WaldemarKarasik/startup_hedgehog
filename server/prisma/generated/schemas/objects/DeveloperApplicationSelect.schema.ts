import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
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
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const DeveloperApplicationSelectObjectSchema: z.ZodType<Prisma.DeveloperApplicationSelect> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationSelect>;
export const DeveloperApplicationSelectObjectZodSchema = makeSchema();
