import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeWhereInputObjectSchema as DisputeWhereInputObjectSchema } from './DisputeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DisputeWhereInputObjectSchema).optional(),
  some: z.lazy(() => DisputeWhereInputObjectSchema).optional(),
  none: z.lazy(() => DisputeWhereInputObjectSchema).optional()
}).strict();
export const DisputeListRelationFilterObjectSchema: z.ZodType<Prisma.DisputeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DisputeListRelationFilter>;
export const DisputeListRelationFilterObjectZodSchema = makeSchema();
