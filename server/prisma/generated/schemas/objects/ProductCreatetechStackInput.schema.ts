import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreatetechStackInputObjectSchema: z.ZodType<Prisma.ProductCreatetechStackInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreatetechStackInput>;
export const ProductCreatetechStackInputObjectZodSchema = makeSchema();
