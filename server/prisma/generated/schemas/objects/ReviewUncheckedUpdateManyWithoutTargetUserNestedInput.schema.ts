import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewCreateWithoutTargetUserInputObjectSchema as ReviewCreateWithoutTargetUserInputObjectSchema } from './ReviewCreateWithoutTargetUserInput.schema';
import { ReviewUncheckedCreateWithoutTargetUserInputObjectSchema as ReviewUncheckedCreateWithoutTargetUserInputObjectSchema } from './ReviewUncheckedCreateWithoutTargetUserInput.schema';
import { ReviewCreateOrConnectWithoutTargetUserInputObjectSchema as ReviewCreateOrConnectWithoutTargetUserInputObjectSchema } from './ReviewCreateOrConnectWithoutTargetUserInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutTargetUserInputObjectSchema as ReviewUpsertWithWhereUniqueWithoutTargetUserInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutTargetUserInput.schema';
import { ReviewCreateManyTargetUserInputEnvelopeObjectSchema as ReviewCreateManyTargetUserInputEnvelopeObjectSchema } from './ReviewCreateManyTargetUserInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutTargetUserInputObjectSchema as ReviewUpdateWithWhereUniqueWithoutTargetUserInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutTargetUserInput.schema';
import { ReviewUpdateManyWithWhereWithoutTargetUserInputObjectSchema as ReviewUpdateManyWithWhereWithoutTargetUserInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutTargetUserInput.schema';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewCreateWithoutTargetUserInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTargetUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutTargetUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewUpsertWithWhereUniqueWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUpsertWithWhereUniqueWithoutTargetUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyTargetUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewUpdateWithWhereUniqueWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUpdateWithWhereUniqueWithoutTargetUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewUpdateManyWithWhereWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUpdateManyWithWhereWithoutTargetUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewScalarWhereInputObjectSchema), z.lazy(() => ReviewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedUpdateManyWithoutTargetUserNestedInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutTargetUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutTargetUserNestedInput>;
export const ReviewUncheckedUpdateManyWithoutTargetUserNestedInputObjectZodSchema = makeSchema();
