import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutAuthorInputObjectSchema as ReviewUpdateWithoutAuthorInputObjectSchema } from './ReviewUpdateWithoutAuthorInput.schema';
import { ReviewUncheckedUpdateWithoutAuthorInputObjectSchema as ReviewUncheckedUpdateWithoutAuthorInputObjectSchema } from './ReviewUncheckedUpdateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutAuthorInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutAuthorInput>;
export const ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
