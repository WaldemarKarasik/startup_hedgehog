import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutReceivedReviewsInputObjectSchema as UserCreateWithoutReceivedReviewsInputObjectSchema } from './UserCreateWithoutReceivedReviewsInput.schema';
import { UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema as UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReceivedReviewsInput.schema';
import { UserCreateOrConnectWithoutReceivedReviewsInputObjectSchema as UserCreateOrConnectWithoutReceivedReviewsInputObjectSchema } from './UserCreateOrConnectWithoutReceivedReviewsInput.schema';
import { UserUpsertWithoutReceivedReviewsInputObjectSchema as UserUpsertWithoutReceivedReviewsInputObjectSchema } from './UserUpsertWithoutReceivedReviewsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutReceivedReviewsInputObjectSchema as UserUpdateToOneWithWhereWithoutReceivedReviewsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutReceivedReviewsInput.schema';
import { UserUpdateWithoutReceivedReviewsInputObjectSchema as UserUpdateWithoutReceivedReviewsInputObjectSchema } from './UserUpdateWithoutReceivedReviewsInput.schema';
import { UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema as UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReceivedReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReceivedReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReceivedReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReceivedReviewsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUpdateWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutReceivedReviewsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutReceivedReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutReceivedReviewsNestedInput>;
export const UserUpdateOneWithoutReceivedReviewsNestedInputObjectZodSchema = makeSchema();
