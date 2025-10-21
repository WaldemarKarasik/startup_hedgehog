import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutTargetUserInputObjectSchema as ReviewUpdateWithoutTargetUserInputObjectSchema } from './ReviewUpdateWithoutTargetUserInput.schema';
import { ReviewUncheckedUpdateWithoutTargetUserInputObjectSchema as ReviewUncheckedUpdateWithoutTargetUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutTargetUserInput.schema';
import { ReviewCreateWithoutTargetUserInputObjectSchema as ReviewCreateWithoutTargetUserInputObjectSchema } from './ReviewCreateWithoutTargetUserInput.schema';
import { ReviewUncheckedCreateWithoutTargetUserInputObjectSchema as ReviewUncheckedCreateWithoutTargetUserInputObjectSchema } from './ReviewUncheckedCreateWithoutTargetUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutTargetUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTargetUserInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutTargetUserInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutTargetUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutTargetUserInput>;
export const ReviewUpsertWithWhereUniqueWithoutTargetUserInputObjectZodSchema = makeSchema();
