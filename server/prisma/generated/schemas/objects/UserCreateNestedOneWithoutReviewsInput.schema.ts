import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutReviewsInputObjectSchema as UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema as UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema';
import { UserCreateOrConnectWithoutReviewsInputObjectSchema as UserCreateOrConnectWithoutReviewsInputObjectSchema } from './UserCreateOrConnectWithoutReviewsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutReviewsInput>;
export const UserCreateNestedOneWithoutReviewsInputObjectZodSchema = makeSchema();
