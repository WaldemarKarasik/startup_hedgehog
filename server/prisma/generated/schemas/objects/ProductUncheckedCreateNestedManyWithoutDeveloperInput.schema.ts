import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCreateWithoutDeveloperInputObjectSchema as ProductCreateWithoutDeveloperInputObjectSchema } from './ProductCreateWithoutDeveloperInput.schema';
import { ProductUncheckedCreateWithoutDeveloperInputObjectSchema as ProductUncheckedCreateWithoutDeveloperInputObjectSchema } from './ProductUncheckedCreateWithoutDeveloperInput.schema';
import { ProductCreateOrConnectWithoutDeveloperInputObjectSchema as ProductCreateOrConnectWithoutDeveloperInputObjectSchema } from './ProductCreateOrConnectWithoutDeveloperInput.schema';
import { ProductCreateManyDeveloperInputEnvelopeObjectSchema as ProductCreateManyDeveloperInputEnvelopeObjectSchema } from './ProductCreateManyDeveloperInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductCreateWithoutDeveloperInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDeveloperInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutDeveloperInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutDeveloperInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductCreateManyDeveloperInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductUncheckedCreateNestedManyWithoutDeveloperInputObjectSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutDeveloperInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutDeveloperInput>;
export const ProductUncheckedCreateNestedManyWithoutDeveloperInputObjectZodSchema = makeSchema();
