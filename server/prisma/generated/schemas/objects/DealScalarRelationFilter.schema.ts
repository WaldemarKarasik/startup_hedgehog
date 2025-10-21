import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DealWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DealWhereInputObjectSchema).optional()
}).strict();
export const DealScalarRelationFilterObjectSchema: z.ZodType<Prisma.DealScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DealScalarRelationFilter>;
export const DealScalarRelationFilterObjectZodSchema = makeSchema();
