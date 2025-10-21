import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ProductUpdatetechStackInputObjectSchema: z.ZodType<Prisma.ProductUpdatetechStackInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdatetechStackInput>;
export const ProductUpdatetechStackInputObjectZodSchema = makeSchema();
