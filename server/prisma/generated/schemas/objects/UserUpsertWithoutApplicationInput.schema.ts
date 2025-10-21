import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserUpdateWithoutApplicationInputObjectSchema as UserUpdateWithoutApplicationInputObjectSchema } from './UserUpdateWithoutApplicationInput.schema';
import { UserUncheckedUpdateWithoutApplicationInputObjectSchema as UserUncheckedUpdateWithoutApplicationInputObjectSchema } from './UserUncheckedUpdateWithoutApplicationInput.schema';
import { UserCreateWithoutApplicationInputObjectSchema as UserCreateWithoutApplicationInputObjectSchema } from './UserCreateWithoutApplicationInput.schema';
import { UserUncheckedCreateWithoutApplicationInputObjectSchema as UserUncheckedCreateWithoutApplicationInputObjectSchema } from './UserUncheckedCreateWithoutApplicationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutApplicationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutApplicationInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApplicationInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutApplicationInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutApplicationInput>;
export const UserUpsertWithoutApplicationInputObjectZodSchema = makeSchema();
