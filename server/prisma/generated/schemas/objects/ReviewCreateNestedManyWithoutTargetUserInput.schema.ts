import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewCreateWithoutTargetUserInputObjectSchema as ReviewCreateWithoutTargetUserInputObjectSchema } from './ReviewCreateWithoutTargetUserInput.schema';
import { ReviewUncheckedCreateWithoutTargetUserInputObjectSchema as ReviewUncheckedCreateWithoutTargetUserInputObjectSchema } from './ReviewUncheckedCreateWithoutTargetUserInput.schema';
import { ReviewCreateOrConnectWithoutTargetUserInputObjectSchema as ReviewCreateOrConnectWithoutTargetUserInputObjectSchema } from './ReviewCreateOrConnectWithoutTargetUserInput.schema';
import { ReviewCreateManyTargetUserInputEnvelopeObjectSchema as ReviewCreateManyTargetUserInputEnvelopeObjectSchema } from './ReviewCreateManyTargetUserInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewCreateWithoutTargetUserInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTargetUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutTargetUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyTargetUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewCreateNestedManyWithoutTargetUserInputObjectSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutTargetUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateNestedManyWithoutTargetUserInput>;
export const ReviewCreateNestedManyWithoutTargetUserInputObjectZodSchema = makeSchema();
