import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCreateManyDeveloperInputObjectSchema as ProductCreateManyDeveloperInputObjectSchema } from './ProductCreateManyDeveloperInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductCreateManyDeveloperInputObjectSchema), z.lazy(() => ProductCreateManyDeveloperInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductCreateManyDeveloperInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductCreateManyDeveloperInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateManyDeveloperInputEnvelope>;
export const ProductCreateManyDeveloperInputEnvelopeObjectZodSchema = makeSchema();
