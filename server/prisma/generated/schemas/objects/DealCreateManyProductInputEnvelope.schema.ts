import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateManyProductInputObjectSchema as DealCreateManyProductInputObjectSchema } from './DealCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DealCreateManyProductInputObjectSchema), z.lazy(() => DealCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DealCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.DealCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateManyProductInputEnvelope>;
export const DealCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
