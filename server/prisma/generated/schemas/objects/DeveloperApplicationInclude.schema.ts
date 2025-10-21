import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const DeveloperApplicationIncludeObjectSchema: z.ZodType<Prisma.DeveloperApplicationInclude> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationInclude>;
export const DeveloperApplicationIncludeObjectZodSchema = makeSchema();
