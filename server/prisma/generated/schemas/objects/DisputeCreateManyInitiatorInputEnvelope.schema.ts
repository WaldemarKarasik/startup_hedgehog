import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeCreateManyInitiatorInputObjectSchema as DisputeCreateManyInitiatorInputObjectSchema } from './DisputeCreateManyInitiatorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DisputeCreateManyInitiatorInputObjectSchema), z.lazy(() => DisputeCreateManyInitiatorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DisputeCreateManyInitiatorInputEnvelopeObjectSchema: z.ZodType<Prisma.DisputeCreateManyInitiatorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateManyInitiatorInputEnvelope>;
export const DisputeCreateManyInitiatorInputEnvelopeObjectZodSchema = makeSchema();
