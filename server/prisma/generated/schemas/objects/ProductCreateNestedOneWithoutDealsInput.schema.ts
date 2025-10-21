import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCreateWithoutDealsInputObjectSchema as ProductCreateWithoutDealsInputObjectSchema } from './ProductCreateWithoutDealsInput.schema';
import { ProductUncheckedCreateWithoutDealsInputObjectSchema as ProductUncheckedCreateWithoutDealsInputObjectSchema } from './ProductUncheckedCreateWithoutDealsInput.schema';
import { ProductCreateOrConnectWithoutDealsInputObjectSchema as ProductCreateOrConnectWithoutDealsInputObjectSchema } from './ProductCreateOrConnectWithoutDealsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutDealsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutDealsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutDealsInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutDealsInput>;
export const ProductCreateNestedOneWithoutDealsInputObjectZodSchema = makeSchema();
