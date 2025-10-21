import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutReviewsInputObjectSchema as UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema as UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema';
import { UserCreateOrConnectWithoutReviewsInputObjectSchema as UserCreateOrConnectWithoutReviewsInputObjectSchema } from './UserCreateOrConnectWithoutReviewsInput.schema';
import { UserUpsertWithoutReviewsInputObjectSchema as UserUpsertWithoutReviewsInputObjectSchema } from './UserUpsertWithoutReviewsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutReviewsInputObjectSchema as UserUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutReviewsInput.schema';
import { UserUpdateWithoutReviewsInputObjectSchema as UserUpdateWithoutReviewsInputObjectSchema } from './UserUpdateWithoutReviewsInput.schema';
import { UserUncheckedUpdateWithoutReviewsInputObjectSchema as UserUncheckedUpdateWithoutReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => UserUpdateWithoutReviewsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewsNestedInput>;
export const UserUpdateOneRequiredWithoutReviewsNestedInputObjectZodSchema = makeSchema();
