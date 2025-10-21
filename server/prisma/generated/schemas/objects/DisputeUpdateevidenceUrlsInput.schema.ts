import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const DisputeUpdateevidenceUrlsInputObjectSchema: z.ZodType<Prisma.DisputeUpdateevidenceUrlsInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeUpdateevidenceUrlsInput>;
export const DisputeUpdateevidenceUrlsInputObjectZodSchema = makeSchema();
