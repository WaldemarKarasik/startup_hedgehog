import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.string().optional(),
  dealId: z.string().optional()
}).strict();
export const ContractWhereUniqueInputObjectSchema: z.ZodType<Prisma.ContractWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractWhereUniqueInput>;
export const ContractWhereUniqueInputObjectZodSchema = makeSchema();
