import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutDeveloperInputObjectSchema as ProductUpdateWithoutDeveloperInputObjectSchema } from './ProductUpdateWithoutDeveloperInput.schema';
import { ProductUncheckedUpdateWithoutDeveloperInputObjectSchema as ProductUncheckedUpdateWithoutDeveloperInputObjectSchema } from './ProductUncheckedUpdateWithoutDeveloperInput.schema';
import { ProductCreateWithoutDeveloperInputObjectSchema as ProductCreateWithoutDeveloperInputObjectSchema } from './ProductCreateWithoutDeveloperInput.schema';
import { ProductUncheckedCreateWithoutDeveloperInputObjectSchema as ProductUncheckedCreateWithoutDeveloperInputObjectSchema } from './ProductUncheckedCreateWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductUpdateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutDeveloperInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDeveloperInputObjectSchema)])
}).strict();
export const ProductUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutDeveloperInput>;
export const ProductUpsertWithWhereUniqueWithoutDeveloperInputObjectZodSchema = makeSchema();
