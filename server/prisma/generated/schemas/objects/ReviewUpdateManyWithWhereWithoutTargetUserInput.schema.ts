import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutTargetUserInputObjectSchema as ReviewUncheckedUpdateManyWithoutTargetUserInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutTargetUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutTargetUserInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutTargetUserInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutTargetUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutTargetUserInput>;
export const ReviewUpdateManyWithWhereWithoutTargetUserInputObjectZodSchema = makeSchema();
