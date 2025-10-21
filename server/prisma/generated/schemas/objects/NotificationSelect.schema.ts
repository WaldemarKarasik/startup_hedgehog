import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  type: z.boolean().optional(),
  title: z.boolean().optional(),
  message: z.boolean().optional(),
  link: z.boolean().optional(),
  metadata: z.boolean().optional(),
  isRead: z.boolean().optional(),
  readAt: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const NotificationSelectObjectSchema: z.ZodType<Prisma.NotificationSelect> = makeSchema() as unknown as z.ZodType<Prisma.NotificationSelect>;
export const NotificationSelectObjectZodSchema = makeSchema();
