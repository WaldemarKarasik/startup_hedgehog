import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateManyBuyerInputObjectSchema as DealCreateManyBuyerInputObjectSchema } from './DealCreateManyBuyerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DealCreateManyBuyerInputObjectSchema), z.lazy(() => DealCreateManyBuyerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DealCreateManyBuyerInputEnvelopeObjectSchema: z.ZodType<Prisma.DealCreateManyBuyerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateManyBuyerInputEnvelope>;
export const DealCreateManyBuyerInputEnvelopeObjectZodSchema = makeSchema();
