import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DealWhereUniqueInputObjectSchema: z.ZodType<Prisma.DealWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DealWhereUniqueInput>;
export const DealWhereUniqueInputObjectZodSchema = makeSchema();
