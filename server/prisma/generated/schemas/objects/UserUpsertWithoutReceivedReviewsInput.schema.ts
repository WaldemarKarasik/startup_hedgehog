import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserUpdateWithoutReceivedReviewsInputObjectSchema as UserUpdateWithoutReceivedReviewsInputObjectSchema } from './UserUpdateWithoutReceivedReviewsInput.schema';
import { UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema as UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReceivedReviewsInput.schema';
import { UserCreateWithoutReceivedReviewsInputObjectSchema as UserCreateWithoutReceivedReviewsInputObjectSchema } from './UserCreateWithoutReceivedReviewsInput.schema';
import { UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema as UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReceivedReviewsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutReceivedReviewsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutReceivedReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutReceivedReviewsInput>;
export const UserUpsertWithoutReceivedReviewsInputObjectZodSchema = makeSchema();
