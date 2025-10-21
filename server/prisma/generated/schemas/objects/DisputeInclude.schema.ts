import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealArgsObjectSchema as DealArgsObjectSchema } from './DealArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  deal: z.union([z.boolean(), z.lazy(() => DealArgsObjectSchema)]).optional(),
  initiator: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const DisputeIncludeObjectSchema: z.ZodType<Prisma.DisputeInclude> = makeSchema() as unknown as z.ZodType<Prisma.DisputeInclude>;
export const DisputeIncludeObjectZodSchema = makeSchema();
