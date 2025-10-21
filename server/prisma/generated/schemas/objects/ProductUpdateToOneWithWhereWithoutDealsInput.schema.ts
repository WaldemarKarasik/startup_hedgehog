import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutDealsInputObjectSchema as ProductUpdateWithoutDealsInputObjectSchema } from './ProductUpdateWithoutDealsInput.schema';
import { ProductUncheckedUpdateWithoutDealsInputObjectSchema as ProductUncheckedUpdateWithoutDealsInputObjectSchema } from './ProductUncheckedUpdateWithoutDealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutDealsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutDealsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutDealsInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutDealsInput>;
export const ProductUpdateToOneWithWhereWithoutDealsInputObjectZodSchema = makeSchema();
