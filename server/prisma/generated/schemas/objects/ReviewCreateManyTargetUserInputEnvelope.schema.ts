import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewCreateManyTargetUserInputObjectSchema as ReviewCreateManyTargetUserInputObjectSchema } from './ReviewCreateManyTargetUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyTargetUserInputObjectSchema), z.lazy(() => ReviewCreateManyTargetUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewCreateManyTargetUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyTargetUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyTargetUserInputEnvelope>;
export const ReviewCreateManyTargetUserInputEnvelopeObjectZodSchema = makeSchema();
