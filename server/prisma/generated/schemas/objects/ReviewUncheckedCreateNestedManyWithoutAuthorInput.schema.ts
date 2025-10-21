import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ReviewCreateWithoutAuthorInputObjectSchema as ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema as ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema';
import { ReviewCreateOrConnectWithoutAuthorInputObjectSchema as ReviewCreateOrConnectWithoutAuthorInputObjectSchema } from './ReviewCreateOrConnectWithoutAuthorInput.schema';
import { ReviewCreateManyAuthorInputEnvelopeObjectSchema as ReviewCreateManyAuthorInputEnvelopeObjectSchema } from './ReviewCreateManyAuthorInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutAuthorInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutAuthorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyAuthorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedCreateNestedManyWithoutAuthorInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput>;
export const ReviewUncheckedCreateNestedManyWithoutAuthorInputObjectZodSchema = makeSchema();
