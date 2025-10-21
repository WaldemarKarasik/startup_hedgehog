import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutDeveloperInputObjectSchema as ProductUpdateWithoutDeveloperInputObjectSchema } from './ProductUpdateWithoutDeveloperInput.schema';
import { ProductUncheckedUpdateWithoutDeveloperInputObjectSchema as ProductUncheckedUpdateWithoutDeveloperInputObjectSchema } from './ProductUncheckedUpdateWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutDeveloperInputObjectSchema)])
}).strict();
export const ProductUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutDeveloperInput>;
export const ProductUpdateWithWhereUniqueWithoutDeveloperInputObjectZodSchema = makeSchema();
