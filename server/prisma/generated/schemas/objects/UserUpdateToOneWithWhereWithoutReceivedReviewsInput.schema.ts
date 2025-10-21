import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReceivedReviewsInputObjectSchema as UserUpdateWithoutReceivedReviewsInputObjectSchema } from './UserUpdateWithoutReceivedReviewsInput.schema';
import { UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema as UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReceivedReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutReceivedReviewsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReceivedReviewsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutReceivedReviewsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReceivedReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReceivedReviewsInput>;
export const UserUpdateToOneWithWhereWithoutReceivedReviewsInputObjectZodSchema = makeSchema();
