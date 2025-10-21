import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealCreateManyDeveloperInputObjectSchema as DealCreateManyDeveloperInputObjectSchema } from './DealCreateManyDeveloperInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => DealCreateManyDeveloperInputObjectSchema), z.lazy(() => DealCreateManyDeveloperInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const DealCreateManyDeveloperInputEnvelopeObjectSchema: z.ZodType<Prisma.DealCreateManyDeveloperInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.DealCreateManyDeveloperInputEnvelope>;
export const DealCreateManyDeveloperInputEnvelopeObjectZodSchema = makeSchema();
