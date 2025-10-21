import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutTargetUserInputObjectSchema as ReviewUpdateWithoutTargetUserInputObjectSchema } from './ReviewUpdateWithoutTargetUserInput.schema';
import { ReviewUncheckedUpdateWithoutTargetUserInputObjectSchema as ReviewUncheckedUpdateWithoutTargetUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutTargetUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutTargetUserInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutTargetUserInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutTargetUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutTargetUserInput>;
export const ReviewUpdateWithWhereUniqueWithoutTargetUserInputObjectZodSchema = makeSchema();
