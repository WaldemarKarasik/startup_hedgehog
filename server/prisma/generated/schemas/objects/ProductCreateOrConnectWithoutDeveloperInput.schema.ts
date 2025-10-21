import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutDeveloperInputObjectSchema as ProductCreateWithoutDeveloperInputObjectSchema } from './ProductCreateWithoutDeveloperInput.schema';
import { ProductUncheckedCreateWithoutDeveloperInputObjectSchema as ProductUncheckedCreateWithoutDeveloperInputObjectSchema } from './ProductUncheckedCreateWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDeveloperInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateOrConnectWithoutDeveloperInput>;
export const ProductCreateOrConnectWithoutDeveloperInputObjectZodSchema = makeSchema();
