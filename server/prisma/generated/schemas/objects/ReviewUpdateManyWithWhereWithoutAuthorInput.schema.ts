import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutAuthorInputObjectSchema as ReviewUncheckedUpdateManyWithoutAuthorInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutAuthorInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutAuthorInput>;
export const ReviewUpdateManyWithWhereWithoutAuthorInputObjectZodSchema = makeSchema();
