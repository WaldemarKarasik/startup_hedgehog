import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationArgsObjectSchema as DeveloperApplicationArgsObjectSchema } from './DeveloperApplicationArgs.schema';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { DealFindManySchema as DealFindManySchema } from '../findManyDeal.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { DisputeFindManySchema as DisputeFindManySchema } from '../findManyDispute.schema';
import { NotificationFindManySchema as NotificationFindManySchema } from '../findManyNotification.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  application: z.union([z.boolean(), z.lazy(() => DeveloperApplicationArgsObjectSchema)]).optional(),
  developedProducts: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
  purchasedDeals: z.union([z.boolean(), z.lazy(() => DealFindManySchema)]).optional(),
  soldDeals: z.union([z.boolean(), z.lazy(() => DealFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  receivedReviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  disputes: z.union([z.boolean(), z.lazy(() => DisputeFindManySchema)]).optional(),
  notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
