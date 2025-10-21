import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCreateWithoutDealsInputObjectSchema as ProductCreateWithoutDealsInputObjectSchema } from './ProductCreateWithoutDealsInput.schema';
import { ProductUncheckedCreateWithoutDealsInputObjectSchema as ProductUncheckedCreateWithoutDealsInputObjectSchema } from './ProductUncheckedCreateWithoutDealsInput.schema';
import { ProductCreateOrConnectWithoutDealsInputObjectSchema as ProductCreateOrConnectWithoutDealsInputObjectSchema } from './ProductCreateOrConnectWithoutDealsInput.schema';
import { ProductUpsertWithoutDealsInputObjectSchema as ProductUpsertWithoutDealsInputObjectSchema } from './ProductUpsertWithoutDealsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutDealsInputObjectSchema as ProductUpdateToOneWithWhereWithoutDealsInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutDealsInput.schema';
import { ProductUpdateWithoutDealsInputObjectSchema as ProductUpdateWithoutDealsInputObjectSchema } from './ProductUpdateWithoutDealsInput.schema';
import { ProductUncheckedUpdateWithoutDealsInputObjectSchema as ProductUncheckedUpdateWithoutDealsInputObjectSchema } from './ProductUncheckedUpdateWithoutDealsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutDealsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutDealsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutDealsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutDealsInputObjectSchema), z.lazy(() => ProductUpdateWithoutDealsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutDealsInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutDealsNestedInputObjectSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutDealsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateOneRequiredWithoutDealsNestedInput>;
export const ProductUpdateOneRequiredWithoutDealsNestedInputObjectZodSchema = makeSchema();
