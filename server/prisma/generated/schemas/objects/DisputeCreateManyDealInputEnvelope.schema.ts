import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeCreateManyDealInputObjectSchema as DisputeCreateManyDealInputObjectSchema } from './DisputeCreateManyDealInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DisputeCreateManyDealInputObjectSchema), z.lazy(() => DisputeCreateManyDealInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DisputeCreateManyDealInputEnvelopeObjectSchema: z.ZodType<Prisma.DisputeCreateManyDealInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateManyDealInputEnvelope>;
export const DisputeCreateManyDealInputEnvelopeObjectZodSchema = makeSchema();
