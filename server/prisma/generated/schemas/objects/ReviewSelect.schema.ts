import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  authorId: z.boolean().optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  targetUserId: z.boolean().optional(),
  targetUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  productId: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  type: z.boolean().optional(),
  rating: z.boolean().optional(),
  title: z.boolean().optional(),
  comment: z.boolean().optional(),
  isVerifiedPurchase: z.boolean().optional(),
  isVisible: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ReviewSelectObjectSchema: z.ZodType<Prisma.ReviewSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSelect>;
export const ReviewSelectObjectZodSchema = makeSchema();
