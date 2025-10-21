import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutAuthorInputObjectSchema as ReviewUpdateWithoutAuthorInputObjectSchema } from './ReviewUpdateWithoutAuthorInput.schema';
import { ReviewUncheckedUpdateWithoutAuthorInputObjectSchema as ReviewUncheckedUpdateWithoutAuthorInputObjectSchema } from './ReviewUncheckedUpdateWithoutAuthorInput.schema';
import { ReviewCreateWithoutAuthorInputObjectSchema as ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema as ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutAuthorInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutAuthorInput>;
export const ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectZodSchema = makeSchema();
