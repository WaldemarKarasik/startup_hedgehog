import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DisputeWhereUniqueInputObjectSchema: z.ZodType<Prisma.DisputeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeWhereUniqueInput>;
export const DisputeWhereUniqueInputObjectZodSchema = makeSchema();
