import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  developedProducts: z.boolean().optional(),
  purchasedDeals: z.boolean().optional(),
  soldDeals: z.boolean().optional(),
  reviews: z.boolean().optional(),
  receivedReviews: z.boolean().optional(),
  disputes: z.boolean().optional(),
  notifications: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
