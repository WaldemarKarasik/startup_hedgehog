import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutDeveloperInputObjectSchema as ProductUncheckedUpdateManyWithoutDeveloperInputObjectSchema } from './ProductUncheckedUpdateManyWithoutDeveloperInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutDeveloperInputObjectSchema)])
}).strict();
export const ProductUpdateManyWithWhereWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutDeveloperInput>;
export const ProductUpdateManyWithWhereWithoutDeveloperInputObjectZodSchema = makeSchema();
