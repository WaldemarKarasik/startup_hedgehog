import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutDealsInputObjectSchema as ProductCreateWithoutDealsInputObjectSchema } from './ProductCreateWithoutDealsInput.schema';
import { ProductUncheckedCreateWithoutDealsInputObjectSchema as ProductUncheckedCreateWithoutDealsInputObjectSchema } from './ProductUncheckedCreateWithoutDealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutDealsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDealsInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutDealsInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutDealsInput>;
export const ProductCreateOrConnectWithoutDealsInputObjectZodSchema = makeSchema();
