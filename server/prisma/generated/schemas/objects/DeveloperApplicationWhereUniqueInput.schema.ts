import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional()
}).strict();
export const DeveloperApplicationWhereUniqueInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationWhereUniqueInput>;
export const DeveloperApplicationWhereUniqueInputObjectZodSchema = makeSchema();
