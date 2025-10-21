import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductCreateWithoutDeveloperInputObjectSchema as ProductCreateWithoutDeveloperInputObjectSchema } from './ProductCreateWithoutDeveloperInput.schema';
import { ProductUncheckedCreateWithoutDeveloperInputObjectSchema as ProductUncheckedCreateWithoutDeveloperInputObjectSchema } from './ProductUncheckedCreateWithoutDeveloperInput.schema';
import { ProductCreateOrConnectWithoutDeveloperInputObjectSchema as ProductCreateOrConnectWithoutDeveloperInputObjectSchema } from './ProductCreateOrConnectWithoutDeveloperInput.schema';
import { ProductUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema as ProductUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutDeveloperInput.schema';
import { ProductCreateManyDeveloperInputEnvelopeObjectSchema as ProductCreateManyDeveloperInputEnvelopeObjectSchema } from './ProductCreateManyDeveloperInputEnvelope.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema as ProductUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutDeveloperInput.schema';
import { ProductUpdateManyWithWhereWithoutDeveloperInputObjectSchema as ProductUpdateManyWithWhereWithoutDeveloperInputObjectSchema } from './ProductUpdateManyWithWhereWithoutDeveloperInput.schema';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductCreateWithoutDeveloperInputObjectSchema).array(), z.lazy(() => ProductUncheckedCreateWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutDeveloperInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductCreateOrConnectWithoutDeveloperInputObjectSchema), z.lazy(() => ProductCreateOrConnectWithoutDeveloperInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUpsertWithWhereUniqueWithoutDeveloperInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductCreateManyDeveloperInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductWhereUniqueInputObjectSchema), z.lazy(() => ProductWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUpdateWithWhereUniqueWithoutDeveloperInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductUpdateManyWithWhereWithoutDeveloperInputObjectSchema), z.lazy(() => ProductUpdateManyWithWhereWithoutDeveloperInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductScalarWhereInputObjectSchema), z.lazy(() => ProductScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductUncheckedUpdateManyWithoutDeveloperNestedInputObjectSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutDeveloperNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutDeveloperNestedInput>;
export const ProductUncheckedUpdateManyWithoutDeveloperNestedInputObjectZodSchema = makeSchema();
