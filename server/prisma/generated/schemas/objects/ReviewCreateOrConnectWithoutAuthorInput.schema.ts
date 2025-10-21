import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutAuthorInputObjectSchema as ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema as ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutAuthorInput>;
export const ReviewCreateOrConnectWithoutAuthorInputObjectZodSchema = makeSchema();
