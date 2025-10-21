import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  telegram: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  productName: SortOrderSchema.optional(),
  productDescription: SortOrderSchema.optional(),
  customizationPrice: SortOrderSchema.optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  githubUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  demoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  videoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  hasUsers: SortOrderSchema.optional(),
  userCount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  customizationReady: SortOrderSchema.optional(),
  targetBusinesses: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  portfolio: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  additionalInfo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  reviewNotes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reviewedBy: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  reviewedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DeveloperApplicationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationOrderByWithRelationInput>;
export const DeveloperApplicationOrderByWithRelationInputObjectZodSchema = makeSchema();
