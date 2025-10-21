import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutTargetUserInputObjectSchema as ReviewCreateWithoutTargetUserInputObjectSchema } from './ReviewCreateWithoutTargetUserInput.schema';
import { ReviewUncheckedCreateWithoutTargetUserInputObjectSchema as ReviewUncheckedCreateWithoutTargetUserInputObjectSchema } from './ReviewUncheckedCreateWithoutTargetUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutTargetUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTargetUserInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutTargetUserInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutTargetUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutTargetUserInput>;
export const ReviewCreateOrConnectWithoutTargetUserInputObjectZodSchema = makeSchema();
