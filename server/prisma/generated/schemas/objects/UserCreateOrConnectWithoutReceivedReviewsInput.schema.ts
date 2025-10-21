import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReceivedReviewsInputObjectSchema as UserCreateWithoutReceivedReviewsInputObjectSchema } from './UserCreateWithoutReceivedReviewsInput.schema';
import { UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema as UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReceivedReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutReceivedReviewsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReceivedReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutReceivedReviewsInput>;
export const UserCreateOrConnectWithoutReceivedReviewsInputObjectZodSchema = makeSchema();
