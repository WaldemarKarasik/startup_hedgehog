import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserUpdateWithoutReviewsInputObjectSchema as UserUpdateWithoutReviewsInputObjectSchema } from './UserUpdateWithoutReviewsInput.schema';
import { UserUncheckedUpdateWithoutReviewsInputObjectSchema as UserUncheckedUpdateWithoutReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewsInput.schema';
import { UserCreateWithoutReviewsInputObjectSchema as UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema as UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutReviewsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutReviewsInput>;
export const UserUpsertWithoutReviewsInputObjectZodSchema = makeSchema();
