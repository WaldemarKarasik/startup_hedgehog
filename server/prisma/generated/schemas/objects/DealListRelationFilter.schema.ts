import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DealWhereInputObjectSchema).optional(),
  some: z.lazy(() => DealWhereInputObjectSchema).optional(),
  none: z.lazy(() => DealWhereInputObjectSchema).optional()
}).strict();
export const DealListRelationFilterObjectSchema: z.ZodType<Prisma.DealListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DealListRelationFilter>;
export const DealListRelationFilterObjectZodSchema = makeSchema();
