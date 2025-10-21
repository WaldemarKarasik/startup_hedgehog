import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewCreateWithoutAuthorInputObjectSchema as ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema as ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema';
import { ReviewCreateOrConnectWithoutAuthorInputObjectSchema as ReviewCreateOrConnectWithoutAuthorInputObjectSchema } from './ReviewCreateOrConnectWithoutAuthorInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { ReviewCreateManyAuthorInputEnvelopeObjectSchema as ReviewCreateManyAuthorInputEnvelopeObjectSchema } from './ReviewCreateManyAuthorInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema as ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutAuthorInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUpdateManyWithoutAuthorNestedInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutAuthorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithoutAuthorNestedInput>;
export const ReviewUpdateManyWithoutAuthorNestedInputObjectZodSchema = makeSchema();
