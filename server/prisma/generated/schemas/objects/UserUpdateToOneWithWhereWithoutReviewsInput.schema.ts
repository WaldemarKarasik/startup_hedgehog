import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReviewsInputObjectSchema as UserUpdateWithoutReviewsInputObjectSchema } from './UserUpdateWithoutReviewsInput.schema';
import { UserUncheckedUpdateWithoutReviewsInputObjectSchema as UserUncheckedUpdateWithoutReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutReviewsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReviewsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewsInput>;
export const UserUpdateToOneWithWhereWithoutReviewsInputObjectZodSchema = makeSchema();
