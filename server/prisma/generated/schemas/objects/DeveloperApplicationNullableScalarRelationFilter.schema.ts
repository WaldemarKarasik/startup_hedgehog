import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './DeveloperApplicationWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DeveloperApplicationWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => DeveloperApplicationWhereInputObjectSchema).optional().nullable()
}).strict();
export const DeveloperApplicationNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DeveloperApplicationNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationNullableScalarRelationFilter>;
export const DeveloperApplicationNullableScalarRelationFilterObjectZodSchema = makeSchema();
