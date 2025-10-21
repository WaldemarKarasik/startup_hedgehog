import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductUpdateWithoutDealsInputObjectSchema as ProductUpdateWithoutDealsInputObjectSchema } from './ProductUpdateWithoutDealsInput.schema';
import { ProductUncheckedUpdateWithoutDealsInputObjectSchema as ProductUncheckedUpdateWithoutDealsInputObjectSchema } from './ProductUncheckedUpdateWithoutDealsInput.schema';
import { ProductCreateWithoutDealsInputObjectSchema as ProductCreateWithoutDealsInputObjectSchema } from './ProductCreateWithoutDealsInput.schema';
import { ProductUncheckedCreateWithoutDealsInputObjectSchema as ProductUncheckedCreateWithoutDealsInputObjectSchema } from './ProductUncheckedCreateWithoutDealsInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutDealsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutDealsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutDealsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDealsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutDealsInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutDealsInput>;
export const ProductUpsertWithoutDealsInputObjectZodSchema = makeSchema();
