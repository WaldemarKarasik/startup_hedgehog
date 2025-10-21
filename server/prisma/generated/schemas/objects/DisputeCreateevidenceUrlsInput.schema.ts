import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const DisputeCreateevidenceUrlsInputObjectSchema: z.ZodType<Prisma.DisputeCreateevidenceUrlsInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateevidenceUrlsInput>;
export const DisputeCreateevidenceUrlsInputObjectZodSchema = makeSchema();
