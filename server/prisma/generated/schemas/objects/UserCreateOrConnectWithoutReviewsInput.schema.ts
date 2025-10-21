import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReviewsInputObjectSchema as UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema as UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutReviewsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutReviewsInput>;
export const UserCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
