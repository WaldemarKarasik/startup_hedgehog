import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewCreateManyAuthorInputObjectSchema as ReviewCreateManyAuthorInputObjectSchema } from './ReviewCreateManyAuthorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyAuthorInputObjectSchema), z.lazy(() => ReviewCreateManyAuthorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewCreateManyAuthorInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyAuthorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyAuthorInputEnvelope>;
export const ReviewCreateManyAuthorInputEnvelopeObjectZodSchema = makeSchema();
