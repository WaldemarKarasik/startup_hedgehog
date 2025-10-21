import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutReceivedReviewsInputObjectSchema as UserCreateWithoutReceivedReviewsInputObjectSchema } from './UserCreateWithoutReceivedReviewsInput.schema';
import { UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema as UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReceivedReviewsInput.schema';
import { UserCreateOrConnectWithoutReceivedReviewsInputObjectSchema as UserCreateOrConnectWithoutReceivedReviewsInputObjectSchema } from './UserCreateOrConnectWithoutReceivedReviewsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutReceivedReviewsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReceivedReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutReceivedReviewsInput>;
export const UserCreateNestedOneWithoutReceivedReviewsInputObjectZodSchema = makeSchema();
