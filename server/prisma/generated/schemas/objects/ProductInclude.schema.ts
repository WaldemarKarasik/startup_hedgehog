import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { DealFindManySchema as DealFindManySchema } from '../findManyDeal.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { ProductCountOutputTypeArgsObjectSchema as ProductCountOutputTypeArgsObjectSchema } from './ProductCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  developer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  deals: z.union([z.boolean(), z.lazy(() => DealFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProductIncludeObjectSchema: z.ZodType<Prisma.ProductInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProductInclude>;
export const ProductIncludeObjectZodSchema = makeSchema();
